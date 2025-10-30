"use client";
import React, { createContext, useState, useContext } from "react";
import { cn } from "@/components/ui/cn";

type TabsCtx = { value: string; setValue: (v: string) => void };
const Ctx = createContext<TabsCtx | null>(null);

export function Tabs({ defaultValue, className, children }: { defaultValue: string; className?: string; children: React.ReactNode }) {
  const [value, setValue] = useState(defaultValue);
  return <div className={cn(className)}><Ctx.Provider value={{ value, setValue }}>{children}</Ctx.Provider></div>;
}

export function TabsList({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("inline-grid gap-2 rounded-lg bg-slate-100 p-1", className)}>{children}</div>;
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = useContext(Ctx)!;
  const active = ctx.value === value;
  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={cn("px-3 py-2 rounded-md text-sm font-medium transition",
        active ? "bg-white shadow text-slate-900" : "text-slate-600 hover:text-slate-900")}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const ctx = useContext(Ctx)!;
  if (ctx.value !== value) return null;
  return <div className={cn(className)}>{children}</div>;
}
