"use client";

export default function Unauthorized() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Access Denied
        </h1>

        <p className="mt-2 text-muted-foreground">
          You don't have permission to view this page.
        </p>
      </div>
    </div>
  );
}