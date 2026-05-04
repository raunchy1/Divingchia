"use client";

interface GoldLabelProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function GoldLabel({ children, centered = true, className = "", light = false }: GoldLabelProps) {
  return (
    <div className={`${centered ? "justify-center" : ""} flex flex-col ${centered ? "items-center" : "items-start"} mb-6 ${className}`}>
      <span
        className="block w-10 h-px mb-4"
        style={{ backgroundColor: "#C9A84C" }}
      />
      <span
        className="font-jost text-[11px] font-normal uppercase tracking-[0.2em]"
        style={{ color: light ? "#C9A84C" : "#C9A84C" }}
      >
        {children}
      </span>
    </div>
  );
}
