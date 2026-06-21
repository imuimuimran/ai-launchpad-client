import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}