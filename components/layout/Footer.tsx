import Link from 'next/link'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* 会社情報 */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">
                            TechVision Inc.
                        </h3>
                        <p className="text-sm">
                            最先端のテクノロジーで
                            <br />
                            ビジネスの成長を支援します
                        </p>
                    </div>

                    {/* サービス */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">
                            サービス
                        </h3>
                        <ul className="text-sm">
                            <li>
                                <Link
                                    href="/services"
                                    className="block py-2 hover:text-white"
                                >
                                    DXコンサルティング
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="block py-2 hover:text-white"
                                >
                                    システム開発
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="block py-2 hover:text-white"
                                >
                                    クラウドソリューション
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 企業情報 */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">
                            企業情報
                        </h3>
                        <ul className="text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 hover:text-white"
                                >
                                    会社概要
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="block py-2 hover:text-white"
                                >
                                    ブログ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="block py-2 hover:text-white"
                                >
                                    採用情報
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* お問い合わせ */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">
                            お問い合わせ
                        </h3>
                        <ul className="text-sm">
                            <li>
                                <Link
                                    href="/contact"
                                    className="block py-2 hover:text-white"
                                >
                                    お問い合わせフォーム
                                </Link>
                            </li>
                            <li className="mt-4">
                                <p>〒100-0001</p>
                                <p>東京都千代田区千代田1-1</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
                    <p>
                        &copy; {currentYear} TechVision Inc. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
