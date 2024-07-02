import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-4 bg-slate-700 border-b">Hello there beggers</div>
      {children}
    </>
  );
}
