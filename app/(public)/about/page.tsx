import { Container } from '@/components/layout/Container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '会社概要 | TechVision Inc.',
    description:
        'TechVision Inc.の会社情報、企業理念、沿革をご紹介します。',
}

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gray-50 py-16">
                <Container>
                    <h1 className="text-4xl font-bold text-gray-900">
                        会社概要
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        About Us
                    </p>
                </Container>
            </section>

            {/* Company Info */}
            <section className="py-16">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-900">
                            企業理念
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                            私たちTechVision
                            Inc.は、最先端のテクノロジーを駆使し、お客様のビジネスに真の価値を提供することを使命としています。デジタルトランスフォーメーションを通じて、社会をより豊かに、より便利にすることを目指しています。
                        </p>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-900">
                                会社情報
                            </h2>
                            <dl className="mt-6 space-y-4">
                                <div className="flex border-b border-gray-200 py-4">
                                    <dt className="w-32 font-semibold text-gray-900">
                                        会社名
                                    </dt>
                                    <dd className="text-gray-600">
                                        株式会社TechVision (TechVision Inc.)
                                    </dd>
                                </div>
                                <div className="flex border-b border-gray-200 py-4">
                                    <dt className="w-32 font-semibold text-gray-900">
                                        設立
                                    </dt>
                                    <dd className="text-gray-600">
                                        2020年4月1日
                                    </dd>
                                </div>
                                <div className="flex border-b border-gray-200 py-4">
                                    <dt className="w-32 font-semibold text-gray-900">
                                        代表者
                                    </dt>
                                    <dd className="text-gray-600">
                                        代表取締役社長 山田 太郎
                                    </dd>
                                </div>
                                <div className="flex border-b border-gray-200 py-4">
                                    <dt className="w-32 font-semibold text-gray-900">
                                        資本金
                                    </dt>
                                    <dd className="text-gray-600">
                                        1億円
                                    </dd>
                                </div>
                                <div className="flex border-b border-gray-200 py-4">
                                    <dt className="w-32 font-semibold text-gray-900">
                                        従業員数
                                    </dt>
                                    <dd className="text-gray-600">
                                        120名（2024年11月現在）
                                    </dd>
                                </div>
                                <div className="flex border-b border-gray-200 py-4">
                                    <dt className="w-32 font-semibold text-gray-900">
                                        所在地
                                    </dt>
                                    <dd className="text-gray-600">
                                        〒100-0001
                                        <br />
                                        東京都千代田区千代田1-1-1
                                        <br />
                                        TechVisionビル 10F
                                    </dd>
                                </div>
                                <div className="flex py-4">
                                    <dt className="w-32 font-semibold text-gray-900">
                                        事業内容
                                    </dt>
                                    <dd className="text-gray-600">
                                        Webシステム開発
                                        <br />
                                        クラウドインテグレーション
                                        <br />
                                        DX推進支援
                                        <br />
                                        ITコンサルティング
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-900">
                                沿革
                            </h2>
                            <dl className="mt-6 space-y-6">
                                <div>
                                    <dt className="font-semibold text-gray-900">
                                        2020年4月
                                    </dt>
                                    <dd className="mt-2 text-gray-600">
                                        東京都千代田区にて創業
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-gray-900">
                                        2021年3月
                                    </dt>
                                    <dd className="mt-2 text-gray-600">
                                        従業員50名突破、大阪支社開設
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-gray-900">
                                        2022年6月
                                    </dt>
                                    <dd className="mt-2 text-gray-600">
                                        資本金1億円に増資
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-gray-900">
                                        2023年9月
                                    </dt>
                                    <dd className="mt-2 text-gray-600">
                                        従業員100名突破、名古屋支社開設
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-gray-900">
                                        2024年11月
                                    </dt>
                                    <dd className="mt-2 text-gray-600">
                                        従業員120名、DX推進実績100社達成
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
