import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function NewJobPage() {
    const session = await getServerSession(authOptions)

    // フォーム送信処理
    async function createJob(formData: FormData) {
        'use server'

        const session = await getServerSession(authOptions)
        if (!session?.user?.id) {
            throw new Error('Unauthorized')
        }

        const title = formData.get('title') as string
        const department = formData.get('department') as string
        const location = formData.get('location') as string
        const type = formData.get('type') as string
        const description = formData.get('description') as string
        const qualifications = formData.get('qualifications') as string
        const benefits = formData.get('benefits') as string
        const published = formData.get('published') === 'on'

        await prisma.job.create({
            data: {
                title,
                department,
                location,
                type,
                description,
                qualifications,
                benefits,
                published,
            },
        })

        redirect('/admin/jobs')
    }

    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold text-gray-900">
                新規採用情報作成
            </h1>

            <form action={createJob} className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow">
                    {/* 職種名 */}
                    <div className="mb-6">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            職種名
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                    </div>

                    {/* 部署 */}
                    <div className="mb-6">
                        <label
                            htmlFor="department"
                            className="block text-sm font-medium text-gray-700"
                        >
                            部署
                        </label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                    </div>

                    {/* 勤務地 */}
                    <div className="mb-6">
                        <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700"
                        >
                            勤務地
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                    </div>

                    {/* 雇用形態 */}
                    <div className="mb-6">
                        <label
                            htmlFor="type"
                            className="block text-sm font-medium text-gray-700"
                        >
                            雇用形態
                        </label>
                        <select
                            id="type"
                            name="type"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        >
                            <option value="">選択してください</option>
                            <option value="FULL_TIME">正社員</option>
                            <option value="CONTRACT">契約社員</option>
                            <option value="PART_TIME">
                                パート・アルバイト
                            </option>
                        </select>
                    </div>

                    {/* 仕事内容 */}
                    <div className="mb-6">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            仕事内容
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={10}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                    </div>

                    {/* 応募資格 */}
                    <div className="mb-6">
                        <label
                            htmlFor="qualifications"
                            className="block text-sm font-medium text-gray-700"
                        >
                            応募資格
                        </label>
                        <textarea
                            id="qualifications"
                            name="qualifications"
                            rows={10}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                    </div>

                    {/* 待遇・福利厚生 */}
                    <div className="mb-6">
                        <label
                            htmlFor="benefits"
                            className="block text-sm font-medium text-gray-700"
                        >
                            待遇・福利厚生
                        </label>
                        <textarea
                            id="benefits"
                            name="benefits"
                            rows={10}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        />
                    </div>

                    {/* 公開設定 */}
                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            id="published"
                            name="published"
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
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                    >
                        作成
                    </button>
                    <a
                        href="/admin/jobs"
                        className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
                    >
                        キャンセル
                    </a>
                </div>
            </form>
        </div>
    )
}
