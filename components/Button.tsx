import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "light" | "ghost";
} & (
  | { href: string; type?: never; disabled?: never }
  | { href?: never; type: "submit" | "button"; disabled?: boolean }
);

export function Button({
  href,
  type,
  disabled,
  children,
  className,
  variant = "primary",
}: ButtonProps) {
  const classes = cn(
    "theme-button",
    variant === "light" && "theme-button--light",
    variant === "ghost" && "theme-button--ghost",
    className,
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="theme-button__icon" aria-hidden="true">
        <ArrowUpRight className="h-5 w-5" strokeWidth={2.4} />
      </span>
    </>
  );

  if (href !== undefined) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
