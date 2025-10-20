import React, { useState } from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "./utils";

const buttonVariantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive:
    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline:
    "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline",
};

const buttonSizeClasses = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9 rounded-md",
};

function Button(props) {
  const {
    className = "",
    variant = "default",
    size = "default",
    asChild = false,
    dropdown = false,
    dropdownContent = null,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const Comp = asChild ? Slot : "button";

  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

  const variantClass = buttonVariantClasses[variant] || buttonVariantClasses.default;
  const sizeClass = buttonSizeClasses[size] || buttonSizeClasses.default;

  const handleToggle = () => {
    if (dropdown) {
      setIsOpen(!isOpen);
    }
    if (rest.onClick && !dropdown) {
      rest.onClick();
    }
  };

  return (
    <div className="relative inline-block">
      <Comp
        data-slot="button"
        className={cn(baseClasses, variantClass, sizeClass, className)}
        {...rest}
        onClick={handleToggle}
      />
      {dropdown && isOpen && dropdownContent && (
        <div className="absolute left-0 top-full mt-1 z-50">
          {dropdownContent}
        </div>
      )}
    </div>
  );
}

export { Button };
