import * as React from "react";
import { cn } from "@/components/ui/cn";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost"; size?: "default" | "sm" | "icon" }
>(function Button({ className, variant = "default", size = "default", ...props }, ref) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    outline: "border bg-white hover:bg-slate-50 focus:ring-primary",
    ghost: "bg-transparent hover:bg-slate-100 focus:ring-primary",
  } as const;
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    icon: "h-10 w-10",
  } as const;
  return (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
});
