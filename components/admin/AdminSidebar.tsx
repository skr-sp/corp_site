'use client'

import { signOut, useSession } from 'next-auth/react'

export function AdminHeader() {
    const { data: session } = useSession()

    return (
        <header className="border-b bg-white px-4 py-4 lg:px-6">
            <div className="flex items-center justify-between">
                {/* 左側: タイトル（モバイルでは中央寄せのためマージン追加） */}
                <div className="ml-12 flex-1 lg:ml-0">
                    <h2 className="text-xl font-semibold text-gray-900">
                        管理画面
                    </h2>
                </div>

                {/* 右側: ユーザー情報 */}
                <div className="flex items-center gap-4">
                    {session?.user && (
                        <>
                            <div className="hidden items-center gap-2 sm:flex">
                                {session.user.image && (
                                    <img
                                        src={session.user.image}
                                        alt={session.user.name || 'User'}
                                        className="h-8 w-8 rounded-full"
                                    />
                                )}
                                <div className="text-sm">
                                    <div className="font-medium text-gray-900">
                                        {session.user.name}
                                    </div>
                                    <div className="text-gray-500">
                                        {session.user.email}
                                    </div>
                                </div>
                            </div>

                            {/* モバイル: アイコンのみ */}
                            <div className="flex items-center sm:hidden">
                                {session.user.image && (
                                    <img
                                        src={session.user.image}
                                        alt={session.user.name || 'User'}
                                        className="h-8 w-8 rounded-full"
                                    />
                                )}
                            </div>

                            <button
                                onClick={() => signOut()}
                                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                ログアウト
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
