import { TopBar } from "@/components/layout/top-bar"
import { BottomNav } from "@/components/layout/bottom-nav"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <TopBar />
            <main className="px-4 py-5 pb-24">
                {children}
            </main>
            <BottomNav />
        </div>
    )
}
