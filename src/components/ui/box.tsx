import type React from "react";
import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return <Component className={cn(className)} ref={ref} {...props} />;
  }
);
Box.displayName = "Box";

export { Box };
