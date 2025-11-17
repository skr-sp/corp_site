import Link from 'next/link'
import { Container } from './Container'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-gray-200 bg-gray-50">
            <Container>
                <div className="py-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        {/* Company Info */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold text-gray-900">
                                TechVision Inc.
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                最先端のテクノロジーで、
                                <br />
                                ビジネスの未来を創造します。
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                                サービス
                            </h4>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link
                                        href="/services"
                                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        Webシステム開発
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        クラウドインテグレーション
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        DX推進支援
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                                会社情報
                            </h4>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        会社概要
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/careers"
                                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        採用情報
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        お問い合わせ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <p className="text-center text-sm text-gray-600">
                            © {currentYear} TechVision Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
