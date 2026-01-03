import { cn } from "@/lib/utils";

export function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className }) {
  return (
    <div className="overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-48 object-cover transition-transform duration-500 hover:scale-110",
          className
        )}
      />
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={cn("p-5", className)}>
      {children}
    </div>
  );
}
