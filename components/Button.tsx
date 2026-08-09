import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "light" | "ghost";
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "theme-button",
        variant === "light" && "theme-button--light",
        variant === "ghost" && "theme-button--ghost",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="theme-button__icon" aria-hidden="true">
        <ArrowUpRight className="h-5 w-5" strokeWidth={2.4} />
      </span>
    </Link>
  );
}
