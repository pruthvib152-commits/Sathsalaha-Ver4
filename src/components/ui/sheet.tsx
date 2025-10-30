"use client";
import React, { createContext, useContext, useState, Children, cloneElement } from "react";
import { cn } from "@/components/ui/cn";

type CtxType = { open: boolean; setOpen: (v: boolean) => void };
const SheetCtx = createContext<CtxType | null>(null);

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <SheetCtx.Provider value={{ open, setOpen }}>{children}</SheetCtx.Provider>;
}

export function SheetTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactElement }) {
  const ctx = useContext(SheetCtx)!;
  const child = Children.only(children);
  return cloneElement(child, {
    onClick: (e: any) => {
      child.props.onClick?.(e);
      ctx.setOpen(true);
    }
  });
}

export function SheetContent({ side = "right", className, children, ...props }: { side?: "left" | "right" | "top"; className?: string; children: React.ReactNode }) {
  const ctx = useContext(SheetCtx)!;
  if (!ctx.open) return null;
  let panelCls = "";
  if (side === "right") panelCls = "top-0 right-0 h-full w-full max-w-xs flex flex-col";
  else if (side === "left") panelCls = "top-0 left-0 h-full w-full max-w-xs flex flex-col";
  else if (side === "top") panelCls = "left-1/2 -translate-x-1/2 top-4 w-[92%] max-w-sm rounded-2xl";
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-md" onClick={() => ctx.setOpen(false)} />
      <div role="dialog" aria-modal className={cn("absolute bg-white shadow-2xl p-5", panelCls, className)} {...props}>
        {children}
      </div>
    </div>
  );
}

export function SheetClose({ asChild, children }: { asChild?: boolean; children: React.ReactElement }) {
  const ctx = useContext(SheetCtx)!;
  const child = Children.only(children);
  return cloneElement(child, {
    onClick: (e: any) => {
      child.props.onClick?.(e);
      ctx.setOpen(false);
    }
  });
}

export function SheetHeader({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={cn(className)}>{children}</div>;
}

export function SheetTitle({ id, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { id?: string }) {
  return <div id={id} {...props}>{children}</div>;
}
