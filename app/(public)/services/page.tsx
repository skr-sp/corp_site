import { Container } from '@/components/layout/Container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'サービス | TechVision Inc.',
    description:
        'TechVision Inc.が提供するWebシステム開発、クラウドインテグレーション、DX推進支援サービスをご紹介します。',
}

export default function ServicesPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gray-50 py-16">
                <Container>
                    <h1 className="text-4xl font-bold text-gray-900">
                        サービス
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Services
                    </p>
                </Container>
            </section>

            {/* Services */}
            <section className="py-16">
                <Container>
                    <div className="space-y-20">
                        {/* Service 1 */}
                        <div className="grid gap-8 md:grid-cols-2 md:items-center">
                            <div>
                                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                    Service 01
                                </div>
                                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                                    Webシステム開発
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    お客様のビジネスニーズに合わせた、スケーラブルで保守性の高いWebアプリケーションを開発します。
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            Next.js、React、TypeScriptなど最新フレームワークを活用
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            レスポンシブデザインでマルチデバイス対応
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            SEO対策とパフォーマンス最適化
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                                <div className="aspect-video rounded-lg bg-white/50 backdrop-blur-sm"></div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="grid gap-8 md:grid-cols-2 md:items-center">
                            <div className="order-2 md:order-1">
                                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                                    <div className="aspect-video rounded-lg bg-white/50 backdrop-blur-sm"></div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                    Service 02
                                </div>
                                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                                    クラウドインテグレーション
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    AWS、GCPなどのクラウドプラットフォームを活用し、スケーラブルで信頼性の高いインフラを構築します。
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            オンプレミスからクラウドへのマイグレーション支援
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            コスト最適化とセキュリティ強化
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            CI/CDパイプラインの構築と自動化
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="grid gap-8 md:grid-cols-2 md:items-center">
                            <div>
                                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                    Service 03
                                </div>
                                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                                    DX推進支援
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    デジタルトランスフォーメーション戦略の立案から実行まで、包括的にサポートします。
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            現状分析とDX戦略の策定
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            業務プロセスのデジタル化
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg
                                            className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">
                                            データ活用による意思決定支援
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                                <div className="aspect-video rounded-lg bg-white/50 backdrop-blur-sm"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
