"use client";

// import { ReactNode } from "react";
// import { ClerkProvider } from "@clerk/nextjs";
import { ClerkProvider } from '@clerk/nextjs'

import QueryProvider from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import SonnerProvider from "./sonner-provider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <QueryProvider>
          {children}
          <SonnerProvider />
        </QueryProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}