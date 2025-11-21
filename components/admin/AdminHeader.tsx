'use client'

import { signOut, useSession } from 'next-auth/react'

export function AdminHeader() {
    const { data: session } = useSession()

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="flex h-16 items-center justify-between px-6 pl-16 lg:pl-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        管理画面
                    </h2>
                </div>

                <div className="flex items-center gap-4">
                    {/* ユーザー情報 */}
                    <div className="flex items-center gap-3">
                        {session?.user?.image ? (
                            <img
                                src={session.user.image}
                                alt={session.user.name || ''}
                                className="h-8 w-8 rounded-full"
                            />
                        ) : (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                        )}
                        <div className="hidden sm:block">
                            <p className="text-sm font-medium text-gray-900">
                                {session?.user?.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                {session?.user?.role}
                            </p>
                        </div>
                    </div>

                    {/* ログアウトボタン */}
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                        ログアウト
                    </button>
                </div>
            </div>
        </header>
    )
}
