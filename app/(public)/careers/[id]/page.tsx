import { Container } from '@/components/layout/Container'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

type Props = {
    params: Promise<{
        id: string
    }>
}

const JOB_TYPE_LABELS = {
    FULL_TIME: '正社員',
    CONTRACT: '契約社員',
    PART_TIME: 'パート・アルバイト',
} as const

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const job = await prisma.job.findUnique({
        where: { id },
    })

    if (!job) {
        return {
            title: 'ページが見つかりません',
        }
    }

    return {
        title: `${job.title} | 採用情報 | TechVision Inc.`,
        description: job.description.slice(0, 160),
    }
}

export default async function CareerDetailPage({ params }: Props) {
    const { id } = await params

    const job = await prisma.job.findUnique({
        where: { id },
    })

    if (!job || !job.published) {
        notFound()
    }

    return (
        <>
            {/* Page Header */}
            <section className="bg-gray-50 py-16">
                <Container>
                    {/* パンくずリスト */}
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-gray-900">
                            ホーム
                        </Link>
                        <span>/</span>
                        <Link
                            href="/careers"
                            className="hover:text-gray-900"
                        >
                            採用情報
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900">{job.title}</span>
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                            {
                                JOB_TYPE_LABELS[
                                    job.type as keyof typeof JOB_TYPE_LABELS
                                ]
                            }
                        </span>
                        <span className="text-gray-600">{job.department}</span>
                    </div>

                    <h1 className="mb-4 text-4xl font-bold text-gray-900">
                        {job.title}
                    </h1>

                    <div className="flex items-center gap-2 text-gray-600">
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        {job.location}
                    </div>
                </Container>
            </section>

            {/* Job Details */}
            <section className="py-16">
                <Container>
                    <div className="mx-auto max-w-4xl">
                        <div className="space-y-12">
                            {/* 仕事内容 */}
                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    仕事内容
                                </h2>
                                <div className="whitespace-pre-wrap rounded-lg bg-gray-50 p-6 text-gray-700">
                                    {job.description}
                                </div>
                            </div>

                            {/* 応募資格 */}
                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    応募資格
                                </h2>
                                <div className="whitespace-pre-wrap rounded-lg bg-gray-50 p-6 text-gray-700">
                                    {job.qualifications}
                                </div>
                            </div>

                            {/* 待遇・福利厚生 */}
                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    待遇・福利厚生
                                </h2>
                                <div className="whitespace-pre-wrap rounded-lg bg-gray-50 p-6 text-gray-700">
                                    {job.benefits}
                                </div>
                            </div>

                            {/* 応募ボタン */}
                            <div className="border-t border-gray-200 pt-8">
                                <div className="text-center">
                                    <p className="mb-6 text-gray-600">
                                        このポジションに興味をお持ちの方は、
                                        <br />
                                        お問い合わせフォームよりご連絡ください。
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
                                    >
                                        応募・お問い合わせ
                                    </Link>
                                </div>
                            </div>

                            {/* 一覧に戻る */}
                            <div className="text-center">
                                <Link
                                    href="/careers"
                                    className="text-blue-600 hover:text-blue-700"
                                >
                                    ← 採用情報一覧に戻る
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
