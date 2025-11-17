import { Container } from '@/components/layout/Container'
import { PostCard } from '@/components/blog/PostCard'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ブログ | TechVision Inc.',
    description: '最新の技術情報やビジネストレンドをお届けします。',
}

export const revalidate = 3600 // 1時間ごとにISR

export default async function BlogPage() {
    // 公開済みの記事を取得（新しい順）
    const posts = await prisma.post.findMany({
        where: {
            published: true,
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
        orderBy: {
            publishedAt: 'desc',
        },
    })

    return (
        <>
            {/* Page Header */}
            <section className="bg-gray-50 py-16">
                <Container>
                    <h1 className="text-4xl font-bold text-gray-900">
                        ブログ
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">Blog</p>
                </Container>
            </section>

            {/* Blog Posts */}
            <section className="py-16">
                <Container>
                    {posts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-gray-600">
                                まだ記事がありません
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}
                </Container>
            </section>
        </>
    )
}
