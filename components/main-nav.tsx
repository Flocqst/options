"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { cn } from "@/lib/utils"
import { MainNavItem } from "@/types"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ModeToggle } from "./ModeToggle"



interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()

  return (
    <nav className="fixed top-0 z-30 flex-no-wrap relative flex w-full items-center justify-between bg-white dark:bg-zinc-800 px-6 py-3">
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className="hidden font-bold sm:inline-block">
            Home
          </span>
        </Link>
        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
      <div className="relative flex items-center gap-6">
            <ConnectButton/>
            <ModeToggle />
        </div>
    </nav>
  )
}
