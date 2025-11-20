import Link from 'next/link'
import { Container } from './Container'

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                        TechVision
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            会社概要
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            サービス
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            ブログ
                        </Link>
                        <Link
                            href="/careers"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            採用情報
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
                        >
                            お問い合わせ
                        </Link>
                    </nav>

                    {/* Mobile Menu Button (後でハンバーガーメニュー実装) */}
                    <button className="md:hidden text-gray-600">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </Container>
        </header>
    )
}
