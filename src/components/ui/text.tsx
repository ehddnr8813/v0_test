import type React from "react";
import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "muted" | "label";
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as: Component = "p", variant = "body", ...props }, ref) => {
    const variantClasses = {
      h1: "text-3xl font-bold",
      h2: "text-2xl font-bold",
      h3: "text-xl font-semibold",
      h4: "text-lg font-medium",
      body: "text-base",
      small: "text-sm",
      muted: "text-sm text-muted-foreground",
      label: "text-sm font-medium",
    }[variant];

    return (
      <Component
        className={cn(variantClasses, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Text };
