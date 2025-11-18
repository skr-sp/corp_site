import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function DashboardPage() {
    // 統計情報の取得
    const [totalPosts, publishedPosts, draftPosts, totalCategories] =
        await Promise.all([
            prisma.post.count(),
            prisma.post.count({ where: { published: true } }),
            prisma.post.count({ where: { published: false } }),
            prisma.category.count(),
        ])

    // 最近の記事を取得
    const recentPosts = await prisma.post.findMany({
        take: 5,
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            author: {
                select: {
                    name: true,
                },
            },
            category: {
                select: {
                    name: true,
                },
            },
        },
    })

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold text-gray-900">
                ダッシュボード
            </h1>

            {/* 統計カード */}
            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* 総記事数 */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">総記事数</p>
                            <p className="mt-2 text-3xl font-bold text-gray-900">
                                {totalPosts}
                            </p>
                        </div>
                        <div className="rounded-full bg-blue-100 p-3">
                            <svg
                                className="h-8 w-8 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 公開済み */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">公開済み</p>
                            <p className="mt-2 text-3xl font-bold text-green-600">
                                {publishedPosts}
                            </p>
                        </div>
                        <div className="rounded-full bg-green-100 p-3">
                            <svg
                                className="h-8 w-8 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 下書き */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">下書き</p>
                            <p className="mt-2 text-3xl font-bold text-yellow-600">
                                {draftPosts}
                            </p>
                        </div>
                        <div className="rounded-full bg-yellow-100 p-3">
                            <svg
                                className="h-8 w-8 text-yellow-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* カテゴリ数 */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">
                                カテゴリ数
                            </p>
                            <p className="mt-2 text-3xl font-bold text-purple-600">
                                {totalCategories}
                            </p>
                        </div>
                        <div className="rounded-full bg-purple-100 p-3">
                            <svg
                                className="h-8 w-8 text-purple-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* 最近の記事 */}
            <div className="rounded-lg bg-white p-6 shadow">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">
                        最近の記事
                    </h2>
                    <Link
                        href="/admin/posts"
                        className="text-sm text-blue-600 hover:text-blue-700"
                    >
                        すべて見る →
                    </Link>
                </div>

                {recentPosts.length === 0 ? (
                    <p className="text-center text-gray-500">
                        まだ記事がありません
                    </p>
                ) : (
                    <div className="space-y-4">
                        {recentPosts.map((post) => (
                            <div
                                key={post.id}
                                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0"
                            >
                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        {post.title}
                                    </h3>
                                    <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                                        <span>{post.category.name}</span>
                                        <span>•</span>
                                        <span>{post.author.name}</span>
                                        <span>•</span>
                                        <span>
                                            {new Date(
                                                post.createdAt
                                            ).toLocaleDateString('ja-JP')}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    {post.published ? (
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                            公開中
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                            下書き
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
