"use client";
import * as React from "react";
import { cn } from "@/components/ui/cn";

type CtxType = { open: boolean; setOpen: (v: boolean) => void };
const SheetCtx = React.createContext<CtxType | null>(null);

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return <SheetCtx.Provider value={{ open, setOpen }}>{children}</SheetCtx.Provider>;
}

export function SheetTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactElement }) {
  const ctx = React.useContext(SheetCtx)!;
  const child = React.Children.only(children);
  return React.cloneElement(child, {
    onClick: (e: any) => {
      child.props.onClick?.(e);
      ctx.setOpen(true);
    }
  });
}

export function SheetContent({ side = "right", className, children, ...props }: any) {
  const ctx = React.useContext(SheetCtx)!;
  if (!ctx.open) return null;
  const sideCls = side === "right" ? "right-0" : "left-0";
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={() => ctx.setOpen(false)} />
      <div className={cn("absolute top-0 h-full w-80 bg-white shadow-xl p-4", sideCls, className)} {...props}>
        {children}
      </div>
    </div>
  );
}

export function SheetHeader({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={cn(className)}>{children}</div>;
}

export function SheetTitle({ id, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { id?: string }) {
  return <div id={id} {...props}>{children}</div>;
}
