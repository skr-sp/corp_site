import { prisma } from '@/lib/prisma'
import { redirect, notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { DeletePostButton } from '@/components/admin/DeletePostButton'

type Props = {
    params: Promise<{
        id: string
    }>
}

export default async function EditPostPage({ params }: Props) {
    const { id } = await params
    const session = await getServerSession(authOptions)

    // 記事取得
    const post = await prisma.post.findUnique({
        where: { id },
        include: {
            category: true,
        },
    })

    if (!post) {
        notFound()
    }

    // カテゴリ一覧取得
    const categories = await prisma.category.findMany({
        orderBy: {
            name: 'asc',
        },
    })

    // 更新処理
    async function updatePost(formData: FormData) {
        'use server'

        const session = await getServerSession(authOptions)
        if (!session?.user?.id) {
            throw new Error('Unauthorized')
        }

        const title = formData.get('title') as string
        const slug = formData.get('slug') as string
        const content = formData.get('content') as string
        const excerpt = formData.get('excerpt') as string
        const categoryId = formData.get('categoryId') as string
        const published = formData.get('published') === 'on'

        await prisma.post.update({
            where: { id },
            data: {
                title,
                slug,
                content,
                excerpt: excerpt || null,
                published,
                publishedAt: published ? (post.publishedAt || new Date()) : null,
                categoryId,
            },
        })

        redirect('/admin/posts')
    }

    // 削除処理
    async function deletePost() {
        'use server'

        const session = await getServerSession(authOptions)
        if (!session?.user?.id) {
            throw new Error('Unauthorized')
        }

        await prisma.post.delete({
            where: { id },
        })

        redirect('/admin/posts')
    }

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold text-gray-900">
                記事編集
            </h1>

            <form action={updatePost} className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow">
                    {/* タイトル */}
                    <div className="mb-6">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            タイトル
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={post.title}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                    </div>

                    {/* スラッグ */}
                    <div className="mb-6">
                        <label
                            htmlFor="slug"
                            className="block text-sm font-medium text-gray-700"
                        >
                            スラッグ（URL用）
                        </label>
                        <input
                            type="text"
                            id="slug"
                            name="slug"
                            defaultValue={post.slug}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                        <p className="mt-1 text-sm text-gray-500">
                            半角英数字とハイフンのみ使用可能
                        </p>
                    </div>

                    {/* カテゴリ */}
                    <div className="mb-6">
                        <label
                            htmlFor="categoryId"
                            className="block text-sm font-medium text-gray-700"
                        >
                            カテゴリ
                        </label>
                        <select
                            id="categoryId"
                            name="categoryId"
                            defaultValue={post.categoryId}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* 抜粋 */}
                    <div className="mb-6">
                        <label
                            htmlFor="excerpt"
                            className="block text-sm font-medium text-gray-700"
                        >
                            抜粋（任意）
                        </label>
                        <textarea
                            id="excerpt"
                            name="excerpt"
                            rows={3}
                            maxLength={200}
                            defaultValue={post.excerpt || ''}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                        <p className="mt-1 text-sm text-gray-500">
                            最大200文字
                        </p>
                    </div>

                    {/* 本文（Markdown） */}
                    <div className="mb-6">
                        <label
                            htmlFor="content"
                            className="block text-sm font-medium text-gray-700"
                        >
                            本文（Markdown）
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows={20}
                            defaultValue={post.content}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                    </div>

                    {/* 公開設定 */}
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            id="published"
                            name="published"
                            defaultChecked={post.published}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                            htmlFor="published"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            公開する
                        </label>
                    </div>
                </div>

                {/* ボタン */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                        >
                            更新
                        </button>
                        <a
                            href="/admin/posts"
                            className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
                        >
                            キャンセル
                        </a>
                    </div>

                    {/* 削除ボタン */}
                    <DeletePostButton deleteAction={deletePost} />
                </div>
            </form>
        </div>
    )
}
