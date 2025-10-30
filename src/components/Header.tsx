"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/components/ui/cn";

type HeaderProps = {
  centered?: boolean; // centers brand + nav as a group
  centerNavOnDesktop?: boolean; // keeps brand on left, centers nav in the bar (desktop)
};

export default function Header({ centered = false, centerNavOnDesktop = false }: HeaderProps) {
  const pathname = usePathname();
  const [mobileHomeOpen, setMobileHomeOpen] = useState(true);

  const linkBase = "px-3 py-1 rounded-md transition-colors";
  const activeCls = "bg-blue-50 text-blue-600 font-semibold";
  const inactiveCls = "text-slate-700 hover:text-blue-600";

  const NavLinks = (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      <Link
        href="/home"
        aria-current={pathname === "/home" ? "page" : undefined}
        className={cn(linkBase, pathname === "/home" ? activeCls : inactiveCls)}
      >
        Home
      </Link>
      <Link
        href="/about"
        aria-current={pathname === "/about" ? "page" : undefined}
        className={cn(linkBase, pathname === "/about" ? activeCls : inactiveCls)}
      >
        About Us
      </Link>
      <Link
        href="/contact"
        aria-current={pathname === "/contact" ? "page" : undefined}
        className={cn(linkBase, pathname === "/contact" ? activeCls : inactiveCls)}
      >
        Contact Us
      </Link>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/75 border-b shadow-sm">
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center",
          centered ? "justify-center" : "justify-between",
          centerNavOnDesktop && !centered ? "relative" : undefined
        )}
      >
        {centered ? (
          <div className="flex items-center gap-6">
            <a href="#top" className="font-extrabold tracking-tight text-xl text-primary">Sathsalaha</a>
            {NavLinks}
          </div>
        ) : (
          <>
            <a href="#top" className="font-extrabold tracking-tight text-xl text-primary">Sathsalaha</a>
            {/* Center nav absolutely on desktop when requested */}
            {centerNavOnDesktop ? (
              <div className="absolute left-1/2 -translate-x-1/2">{NavLinks}</div>
            ) : (
              NavLinks
            )}
          </>
        )}

        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="menu"><Menu className="h-5 w-5"/></Button>
            </SheetTrigger>
            <SheetContent side="top" aria-labelledby="mobile-sheet-title" className="pt-4">
              <div className="flex items-center justify-between px-1">
                <a href="#top" className="font-extrabold tracking-tight text-lg">Sathsalaha</a>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu"><X className="h-5 w-5"/></Button>
                </SheetClose>
              </div>
              <SheetHeader>
                <SheetTitle id="mobile-sheet-title" className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col items-stretch gap-2 text-lg font-medium">
                <button
                  onClick={() => setMobileHomeOpen((v) => !v)}
                  aria-expanded={mobileHomeOpen}
                  className={cn(
                    "flex items-center justify-between px-1 py-3 text-left",
                    pathname === "/home" ? "text-blue-600 font-semibold" : "text-slate-700"
                  )}
                >
                  <span>Home</span>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", mobileHomeOpen ? "rotate-180" : "rotate-0")} />
                </button>
                {mobileHomeOpen && (
                  <div className="pl-3 flex flex-col items-stretch gap-3 text-base font-normal">
                    {[
                      { href: { pathname: "/home", hash: "about" } as const, label: "About" },
                      { href: { pathname: "/home", hash: "pillars" } as const, label: "Pillars" },
                      { href: { pathname: "/home", hash: "inflection" } as const, label: "Inflection Points" },
                      { href: { pathname: "/home", hash: "renewal" } as const, label: "Renewal" },
                      { href: { pathname: "/home", hash: "engagement" } as const, label: "Engagements" },
                      { href: { pathname: "/home", hash: "approach" } as const, label: "3A Approach" },
                      { href: { pathname: "/home", hash: "contact" } as const, label: "Contact" },
                    ].map((s) => (
                      <SheetClose asChild key={`${s.href.pathname}#${s.href.hash}`}>
                        <Link href={s.href} className="text-slate-700">{s.label}</Link>
                      </SheetClose>
                    ))}
                  </div>
                )}
                <SheetClose asChild>
                  <Link href="/about" className="px-1 py-3 text-slate-700">About Us</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact" className="px-1 py-3 text-slate-700">Contact Us</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="mt-2 w-full">Get Started</Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
