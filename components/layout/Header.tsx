'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { name: 'ホーム', href: '/' },
        { name: 'サービス', href: '/services' },
        { name: 'ブログ', href: '/blog' },
        { name: '採用情報', href: '/careers' },
        { name: 'お問い合わせ', href: '/contact' },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <header className="border-b bg-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                {/* ロゴ */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    TechVision
                </Link>

                {/* デスクトップナビゲーション */}
                <nav className="hidden md:flex md:gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`transition-colors ${
                                isActive(item.href)
                                    ? 'font-semibold text-blue-600'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* モバイルメニューボタン */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="z-50 p-2 md:hidden"
                    aria-label="メニュー"
                    type="button"
                >
                    {isMenuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* モバイルメニュー */}
            {isMenuOpen && (
                <nav className="border-t bg-white md:hidden">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block border-b px-4 py-3 transition-colors ${
                                isActive(item.href)
                                    ? 'bg-blue-50 font-semibold text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}
