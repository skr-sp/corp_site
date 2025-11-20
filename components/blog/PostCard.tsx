import Link from 'next/link'
import { Post, User, Category } from '@prisma/client'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

type PostWithRelations = Post & {
    author: Pick<User, 'name' | 'image'>
    category: Pick<Category, 'name' | 'slug'>
}

type PostCardProps = {
    post: PostWithRelations
}

export function PostCard({ post }: PostCardProps) {
    // 日付フォーマットを安全に処理
    const formattedDate = post.publishedAt
        ? format(new Date(post.publishedAt), 'yyyy年M月d日', { locale: ja })
        : ''

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-blue-600 hover:shadow-lg"
        >
            {/* サムネイル */}
            <div className="aspect-video w-full overflow-hidden bg-gray-100">
                {post.thumbnail ? (
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                        <svg
                            className="h-16 w-16 text-blue-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                )}
            </div>

            {/* コンテンツ */}
            <div className="p-6">
                {/* カテゴリ */}
                <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                        {post.category.name}
                    </span>
                    {formattedDate && (
                        <span className="text-sm text-gray-500">
                            {formattedDate}
                        </span>
                    )}
                </div>

                {/* タイトル */}
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {post.title}
                </h3>

                {/* 抜粋 */}
                {post.excerpt && (
                    <p className="mb-4 line-clamp-2 text-gray-600">
                        {post.excerpt}
                    </p>
                )}

                {/* 著者 */}
                <div className="flex items-center gap-2">
                    {post.author.image ? (
                        <img
                            src={post.author.image}
                            alt={post.author.name || '著者'}
                            className="h-8 w-8 rounded-full"
                        />
                    ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                            <svg
                                className="h-5 w-5 text-gray-400"
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
                    <span className="text-sm text-gray-600">
                        {post.author.name || '匿名'}
                    </span>
                </div>
            </div>
        </Link>
    )
}
