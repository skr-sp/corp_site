import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const JOB_TYPE_LABELS = {
    FULL_TIME: '正社員',
    CONTRACT: '契約社員',
    PART_TIME: 'パート・アルバイト',
} as const

export default async function AdminJobsPage() {
    const jobs = await prisma.job.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })

    return (
        <div>
            {/* ヘッダー */}
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">
                    採用情報管理
                </h1>
                <Link
                    href="/admin/jobs/new"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    新規作成
                </Link>
            </div>

            {/* 採用情報一覧 */}
            <div className="rounded-lg bg-white shadow">
                {jobs.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        まだ採用情報がありません
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b border-gray-200 bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        職種名
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        部署
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        雇用形態
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">
                                        勤務地
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
                                {jobs.map((job) => (
                                    <tr
                                        key={job.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {job.title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {job.department}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {
                                                JOB_TYPE_LABELS[
                                                    job.type as keyof typeof JOB_TYPE_LABELS
                                                ]
                                            }
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {job.location}
                                        </td>
                                        <td className="px-6 py-4">
                                            {job.published ? (
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
                                                new Date(job.createdAt),
                                                'yyyy/MM/dd',
                                                { locale: ja }
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm">
                                            <Link
                                                href={`/admin/jobs/${job.id}/edit`}
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
