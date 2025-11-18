'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AdminSidebar() {
    const pathname = usePathname()

    const menuItems = [
        {
            name: 'ダッシュボード',
            href: '/admin/dashboard',
            icon: (
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
            ),
        },
        {
            name: 'ブログ記事',
            href: '/admin/posts',
            icon: (
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
            ),
        },
    ]

    return (
        <aside className="w-64 bg-gray-900 text-white">
            <div className="p-6">
                <h1 className="text-xl font-bold">TechVision</h1>
                <p className="text-sm text-gray-400">管理画面</p>
            </div>

            <nav className="px-3">
                {menuItems.map((item) => {
                    const isActive = pathname.startsWith(item.href)
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                                isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-800'
                            }`}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
