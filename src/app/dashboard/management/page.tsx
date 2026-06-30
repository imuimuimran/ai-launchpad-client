"use client";

import RoleGuard from "@/components/auth/role-guard";

export default function ManagementPage() {
  return (
    <RoleGuard roles={["manager", "admin"]}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Management Control Dashboard</h1>
        <p className="text-muted-foreground">
          Visible strictly to supervisors and core system administrators.
        </p>
      </div>
    </RoleGuard>
  );
}
