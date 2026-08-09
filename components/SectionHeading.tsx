import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <span className={cn("subheading", align === "center" && "justify-center")}>{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p
        className={cn(
          "section-copy mt-5",
          align === "center" && "mx-auto max-w-2xl",
        )}
      >
        {description}
      </p>
    </div>
  );
}

