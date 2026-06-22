import Sidebar from "./sidebar";
import DashboardNavbar from "./dashboard-navbar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <DashboardNavbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}