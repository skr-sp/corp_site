import { Container } from '@/components/layout/Container'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import type { Metadata } from 'next'

type Props = {
    params: Promise<{
        slug: string
    }>
}

// 静的パスの生成（ビルド時）
export async function generateStaticParams() {
    const posts = await prisma.post.findMany({
        where: {
            published: true,
        },
        select: {
            slug: true,
        },
    })

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// メタデータの生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    
    const post = await prisma.post.findUnique({
        where: {
            slug: slug,
        },
    })

    if (!post) {
        return {
            title: '記事が見つかりません',
        }
    }

    return {
        title: `${post.title} | TechVision Inc.`,
        description: post.excerpt || undefined,
    }
}

export const revalidate = 3600 // 1時間ごとにISR

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params
    
    const post = await prisma.post.findUnique({
        where: {
            slug: slug,
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                },
            },
            category: {
                select: {
                    name: true,
                    slug: true,
                },
            },
        },
    })

    // 記事が存在しないか、非公開の場合は404
    if (!post || !post.published) {
        notFound()
    }

    // 日付フォーマットを事前に処理
    const formattedDate = post.publishedAt
        ? format(new Date(post.publishedAt), 'yyyy年M月d日', { locale: ja })
        : ''

    return (
        <article>
            {/* Header */}
            <section className="bg-gray-50 py-16">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        {/* カテゴリ */}
                        <div className="mb-4 flex items-center gap-2">
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                {post.category.name}
                            </span>
                            {formattedDate && (
                                <span className="text-sm text-gray-500">
                                    {formattedDate}
                                </span>
                            )}
                        </div>

                        {/* タイトル */}
                        <h1 className="text-4xl font-bold text-gray-900">
                            {post.title}
                        </h1>

                        {/* 著者情報 */}
                        <div className="mt-6 flex items-center gap-3">
                            {post.author.image ? (
                                <img
                                    src={post.author.image}
                                    alt={post.author.name || '著者'}
                                    className="h-12 w-12 rounded-full"
                                />
                            ) : (
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                                    <svg
                                        className="h-6 w-6 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div>
                                <p className="font-medium text-gray-900">
                                    {post.author.name || '匿名'}
                                </p>
                                <p className="text-sm text-gray-500">著者</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* サムネイル */}
            {post.thumbnail && (
                <section className="py-8">
                    <Container>
                        <div className="mx-auto max-w-4xl">
                            <div className="aspect-video w-full overflow-hidden rounded-lg">
                                <img
                                    src={post.thumbnail}
                                    alt={post.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </Container>
                </section>
            )}

            {/* Content */}
            <section className="py-16">
                <Container>
                    <div className="prose prose-lg mx-auto max-w-3xl">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </Container>
            </section>
        </article>
    )
}