import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'

export default async function HomePage() {
    const session = await getServerSession(authOptions)

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">TechVision</h1>
                
                {session ? (
                    <div>
                        <p className="mb-4">ようこそ、{session.user?.name}さん</p>
                        <Link
                            href="/admin/dashboard"
                            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                        >
                            管理画面へ
                        </Link>
                    </div>
                ) : (
                    <Link
                        href="/api/auth/signin"
                        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                    >
                        ログイン
                    </Link>
                )}
            </div>
        </div>
    )
}