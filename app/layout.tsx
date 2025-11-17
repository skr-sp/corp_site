import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'TechVision Inc. - 最先端テクノロジーでビジネスの未来を創造',
    description:
        'TechVision Inc.は、Webシステム開発、クラウドインテグレーション、DX推進支援を提供するIT企業です。',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
