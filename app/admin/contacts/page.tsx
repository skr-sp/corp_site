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
                    <>
                        {/* デスクトップ: テーブル表示 */}
                        <div className="hidden overflow-x-auto lg:block">
                            <table className="w-full">
                                <thead className="border-b border-gray-200 bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                            名前
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                            メールアドレス
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                            会社名
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
                                            <td className="px-6 py-4 text-sm text-gray-900">
                                                {contact.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900">
                                                {contact.company || '-'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                        contact.status === 'NEW'
                                                            ? 'bg-blue-100 text-blue-800'
                                                            : contact.status ===
                                                                  'IN_PROGRESS'
                                                              ? 'bg-yellow-100 text-yellow-800'
                                                              : contact.status ===
                                                                    'REPLIED'
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-gray-100 text-gray-800'
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

                        {/* モバイル: カード表示 */}
                        <div className="divide-y divide-gray-200 lg:hidden">
                            {contacts.map((contact) => (
                                <div key={contact.id} className="p-4">
                                    <div className="mb-2 flex items-start justify-between">
                                        <h3 className="font-medium text-gray-900">
                                            {contact.name}
                                        </h3>
                                        <span
                                            className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                                                contact.status === 'NEW'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : contact.status ===
                                                          'IN_PROGRESS'
                                                      ? 'bg-yellow-100 text-yellow-800'
                                                      : contact.status ===
                                                            'REPLIED'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-gray-100 text-gray-800'
                                            }`}
                                        >
                                            {STATUS_LABELS[contact.status]}
                                        </span>
                                    </div>
                                    <div className="mb-1 text-sm text-gray-600">
                                        {contact.email}
                                    </div>
                                    {contact.company && (
                                        <div className="mb-2 text-sm text-gray-600">
                                            <span className="font-medium">
                                                会社:
                                            </span>{' '}
                                            {contact.company}
                                        </div>
                                    )}
                                    <div className="mb-2 text-sm text-gray-700">
                                        {contact.message.slice(0, 50)}...
                                    </div>
                                    <div className="mb-3 text-sm text-gray-500">
                                        {format(
                                            new Date(contact.createdAt),
                                            'yyyy/MM/dd HH:mm',
                                            { locale: ja }
                                        )}
                                    </div>
                                    <Link
                                        href={`/admin/contacts/${contact.id}`}
                                        className="text-sm text-blue-600 hover:text-blue-700"
                                    >
                                        詳細を見る →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
