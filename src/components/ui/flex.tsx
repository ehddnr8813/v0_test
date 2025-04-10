import type React from "react";
import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number | string;
  as?: React.ElementType;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = "row",
      align = "stretch",
      justify = "start",
      wrap = "nowrap",
      gap,
      as: Component = "div",
      ...props
    },
    ref
  ) => {
    const flexDirection = {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    }[direction];

    const alignItems = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    }[align];

    const justifyContent = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    }[justify];

    const flexWrap = {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
    }[wrap];

    const gapClass = gap ? `gap-${gap}` : "";

    return (
      <Component
        className={cn(
          "flex",
          flexDirection,
          alignItems,
          justifyContent,
          flexWrap,
          gapClass,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Flex.displayName = "Flex";

export { Flex };
