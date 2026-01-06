import { cn } from "@/lib/utils";

const buttonVariants = {
  primary: "bg-cyan-700 hover:bg-cyan-800 text-white",
  secondary: "bg-orange-500 hover:bg-orange-600 text-white",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-cyan-700",
};

export function Button({ children, variant = "primary", className, ...props }) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
