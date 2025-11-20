import { Container } from '@/components/layout/Container'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '採用情報 | TechVision Inc.',
    description: 'TechVision Inc.の採用情報。一緒に働く仲間を募集しています。',
}

const JOB_TYPE_LABELS = {
    FULL_TIME: '正社員',
    CONTRACT: '契約社員',
    PART_TIME: 'パート・アルバイト',
} as const

export default async function CareersPage() {
    const jobs = await prisma.job.findMany({
        where: {
            published: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    return (
        <>
            {/* Page Header */}
            <section className="bg-gray-50 py-16">
                <Container>
                    <h1 className="text-4xl font-bold text-gray-900">
                        採用情報
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">Careers</p>
                </Container>
            </section>

            {/* Introduction */}
            <section className="py-16">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900">
                            一緒に働く仲間を募集しています
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            TechVision
                            Inc.では、最先端のテクノロジーに挑戦し、
                            <br />
                            ビジネスの成長を支援する仲間を募集しています。
                        </p>
                    </div>
                </Container>
            </section>

            {/* Job Listings */}
            <section className="bg-gray-50 py-16">
                <Container>
                    {jobs.length === 0 ? (
                        <div className="text-center text-gray-600">
                            現在、募集中のポジションはありません。
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            {jobs.map((job) => (
                                <Link
                                    key={job.id}
                                    href={`/careers/${job.id}`}
                                    className="block rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-lg"
                                >
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                            {
                                                JOB_TYPE_LABELS[
                                                    job.type as keyof typeof JOB_TYPE_LABELS
                                                ]
                                            }
                                        </span>
                                        <span className="text-sm text-gray-600">
                                            {job.department}
                                        </span>
                                    </div>

                                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                                        {job.title}
                                    </h3>

                                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
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

                                    <p className="mb-4 line-clamp-3 text-gray-600">
                                        {job.description.split('\n')[0]}
                                    </p>

                                    <div className="text-blue-600">
                                        詳細を見る →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </Container>
            </section>
        </>
    )
}
