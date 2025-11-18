import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export default async function AdminPostsPage() {
    const posts = await prisma.post.findMany({
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
        orderBy: {
            createdAt: 'desc',
        },
    })

    return (
        <div>
            {/* ヘッダー */}
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">
                    ブログ記事
                </h1>
                <Link
                    href="/admin/posts/new"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    新規作成
                </Link>
            </div>

            {/* 記事一覧 */}
            <div className="rounded-lg bg-white shadow">
                {posts.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        まだ記事がありません
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b border-gray-200 bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        タイトル
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        カテゴリ
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        著者
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        ステータス
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        作成日
                                    </th>
                                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {posts.map((post) => (
                                    <tr
                                        key={post.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">
                                                {post.title}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {post.slug}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {post.category.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {post.author.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {post.published ? (
                                                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                                    公開中
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                                    下書き
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {format(
                                                new Date(post.createdAt),
                                                'yyyy/MM/dd',
                                                { locale: ja }
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm">
                                            <Link
                                                href={`/admin/posts/${post.id}/edit`}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                編集
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
