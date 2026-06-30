"use client";

import RoleGuard from "@/components/auth/role-guard";

export default function AdminDashboardPage() {
  return (
    <RoleGuard roles={["admin"]}>
      <div className="space-y-4 p-6">
        <h1 className="text-2xl font-bold">Admin Analytical Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the control center. Only accounts tagged with an admin role in MongoDB can see this text.
        </p>
        
        {/* Your complex admin metrics widgets, user management tables, etc. go here */}
      </div>
    </RoleGuard>
  );
}
