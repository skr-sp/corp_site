import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            最先端のテクノロジーで
                            <br />
                            <span className="text-blue-600">
                                ビジネスの未来を創造
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                            TechVision
                            Inc.は、企業のDX推進を支援し、ビジネスの成長を加速させます。
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 transition-colors"
                            >
                                お問い合わせ
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                サービスを見る
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">
                            提供サービス
                        </h2>
                        <p className="mt-4 text-gray-600">
                            お客様のビジネスを加速させる3つのソリューション
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {/* Service 1 */}
                        <div className="rounded-lg border border-gray-200 bg-white p-8 hover:border-blue-600 hover:shadow-lg transition-all">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">
                                Webシステム開発
                            </h3>
                            <p className="mt-2 text-gray-600">
                                最新のフレームワークを活用し、スケーラブルで保守性の高いWebアプリケーションを開発します。
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="rounded-lg border border-gray-200 bg-white p-8 hover:border-blue-600 hover:shadow-lg transition-all">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">
                                クラウドインテグレーション
                            </h3>
                            <p className="mt-2 text-gray-600">
                                AWS、GCPなどのクラウドプラットフォームを活用したシステム構築とマイグレーション支援。
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="rounded-lg border border-gray-200 bg-white p-8 hover:border-blue-600 hover:shadow-lg transition-all">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">
                                DX推進支援
                            </h3>
                            <p className="mt-2 text-gray-600">
                                デジタルトランスフォーメーション戦略の立案から実行まで、包括的にサポートします。
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-20">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">
                            TechVisionが選ばれる理由
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <span className="text-2xl font-bold text-blue-600">
                                    01
                                </span>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                豊富な実績
                            </h3>
                            <p className="mt-2 text-gray-600">
                                100社以上のDX推進実績と、高い顧客満足度を誇ります。
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <span className="text-2xl font-bold text-blue-600">
                                    02
                                </span>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                最新技術の活用
                            </h3>
                            <p className="mt-2 text-gray-600">
                                常に最新のテクノロジーをキャッチアップし、最適なソリューションを提供します。
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <span className="text-2xl font-bold text-blue-600">
                                    03
                                </span>
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                手厚いサポート
                            </h3>
                            <p className="mt-2 text-gray-600">
                                開発後の運用保守まで、長期的なパートナーとして伴走します。
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <Container>
                    <div className="rounded-2xl bg-blue-600 px-6 py-16 text-center">
                        <h2 className="text-3xl font-bold text-white">
                            まずはお気軽にご相談ください
                        </h2>
                        <p className="mt-4 text-blue-100">
                            お客様のビジネス課題をお聞かせください。最適なソリューションをご提案します。
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-blue-600 hover:bg-gray-100 transition-colors"
                        >
                            お問い合わせはこちら
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}
