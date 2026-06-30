"use client";

import RoleGuard from "@/components/auth/role-guard";

export default function GeneralDashboardPage() {
  return (
    <RoleGuard roles={["user", "manager", "admin"]}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">My Personal Workspace</h1>
        <p className="text-muted-foreground">
          This content is safe from external unauthenticated traffic.
        </p>
      </div>
    </RoleGuard>
  );
}
