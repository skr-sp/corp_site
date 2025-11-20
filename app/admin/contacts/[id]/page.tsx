import { prisma } from '@/lib/prisma'
import { redirect, notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

type Props = {
    params: Promise<{
        id: string
    }>
}

const STATUS_OPTIONS = [
    { value: 'NEW', label: '新規' },
    { value: 'IN_PROGRESS', label: '対応中' },
    { value: 'REPLIED', label: '返信済み' },
    { value: 'CLOSED', label: '完了' },
] as const

export default async function ContactDetailPage({ params }: Props) {
    const { id } = await params
    const session = await getServerSession(authOptions)

    // お問い合わせ取得
    const contact = await prisma.contact.findUnique({
        where: { id },
    })

    if (!contact) {
        notFound()
    }

    // ステータス更新処理
    async function updateStatus(formData: FormData) {
        'use server'

        const session = await getServerSession(authOptions)
        if (!session?.user?.id) {
            throw new Error('Unauthorized')
        }

        const status = formData.get('status') as string

        await prisma.contact.update({
            where: { id },
            data: {
                status: status as any,
            },
        })

        redirect('/admin/contacts')
    }

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold text-gray-900">
                お問い合わせ詳細
            </h1>

            <div className="space-y-6">
                {/* お問い合わせ情報 */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-4 text-lg font-bold text-gray-900">
                        お問い合わせ情報
                    </h2>

                    <dl className="space-y-4">
                        <div>
                            <dt className="text-sm font-medium text-gray-500">
                                受信日時
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {format(
                                    new Date(contact.createdAt),
                                    'yyyy年MM月dd日 HH:mm',
                                    { locale: ja }
                                )}
                            </dd>
                        </div>

                        <div>
                            <dt className="text-sm font-medium text-gray-500">
                                お名前
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {contact.name}
                            </dd>
                        </div>

                        <div>
                            <dt className="text-sm font-medium text-gray-500">
                                メールアドレス
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="text-blue-600 hover:text-blue-700"
                                >
                                    {contact.email}
                                </a>
                            </dd>
                        </div>

                        {contact.company && (
                            <div>
                                <dt className="text-sm font-medium text-gray-500">
                                    会社名
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {contact.company}
                                </dd>
                            </div>
                        )}

                        <div>
                            <dt className="text-sm font-medium text-gray-500">
                                お問い合わせ内容
                            </dt>
                            <dd className="mt-1 whitespace-pre-wrap text-sm text-gray-900">
                                {contact.message}
                            </dd>
                        </div>
                    </dl>
                </div>

                {/* ステータス更新 */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <h2 className="mb-4 text-lg font-bold text-gray-900">
                        ステータス管理
                    </h2>

                    <form action={updateStatus}>
                        <div className="mb-4">
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700"
                            >
                                現在のステータス
                            </label>
                            <select
                                id="status"
                                name="status"
                                defaultValue={contact.status}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            >
                                {STATUS_OPTIONS.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                            >
                                ステータスを更新
                            </button>
                            <a
                                href="/admin/contacts"
                                className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
                            >
                                一覧に戻る
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
