import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const STATUS_LABELS = {
    NEW: '新規',
    IN_PROGRESS: '対応中',
    REPLIED: '返信済み',
    CLOSED: '完了',
} as const

const STATUS_COLORS = {
    NEW: 'bg-blue-100 text-blue-800',
    IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
    REPLIED: 'bg-green-100 text-green-800',
    CLOSED: 'bg-gray-100 text-gray-800',
} as const

export default async function AdminContactsPage() {
    const contacts = await prisma.contact.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })

    return (
        <div>
            {/* ヘッダー */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    お問い合わせ管理
                </h1>
            </div>

            {/* お問い合わせ一覧 */}
            <div className="rounded-lg bg-white shadow">
                {contacts.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        まだお問い合わせがありません
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b border-gray-200 bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        お名前
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        会社名
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        メールアドレス
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        ステータス
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        受信日時
                                    </th>
                                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {contacts.map((contact) => (
                                    <tr
                                        key={contact.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {contact.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {contact.company || '-'}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {contact.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                    STATUS_COLORS[
                                                        contact.status
                                                    ]
                                                }`}
                                            >
                                                {STATUS_LABELS[contact.status]}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {format(
                                                new Date(contact.createdAt),
                                                'yyyy/MM/dd HH:mm',
                                                { locale: ja }
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm">
                                            <Link
                                                href={`/admin/contacts/${contact.id}`}
                                                className="text-blue-600 hover:text-blue-700"
                                            >
                                                詳細
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
