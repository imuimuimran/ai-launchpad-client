"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser"; 

export default function HomePage() {
  
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-medium">Loading user data from MongoDB...</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI LaunchPad</h1>
      
      <div className="p-4 bg-slate-900 text-green-400 rounded-lg overflow-x-auto shadow-md">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Database Connection Status: Connected ✅
        </h2>
        {/* 4. Display the raw JSON on the screen to confirm success */}
        <pre className="font-mono text-sm leading-relaxed">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
