import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* サイドバー */}
            <AdminSidebar />

            {/* メインコンテンツ */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* ヘッダー */}
                <AdminHeader />

                {/* コンテンツエリア */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
