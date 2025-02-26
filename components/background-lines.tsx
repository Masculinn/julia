import { cn } from "@/lib/utils";
import { MagnetLinesProps, ThemeState } from "@/types";
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const BackgroundLines: React.FC<MagnetLinesProps> = ({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className,
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const theme = useSelector((state: { theme: ThemeState }) => state.theme);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>("span");

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty("--rotate", `${r}deg`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.x, y: e.y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className={cn(
        `block origin-center  relative z-2 `,
        theme === "dark" ? "bg-white" : "bg-black"
      )}
      style={{
        width: lineWidth,
        height: lineHeight,
        //@ts-ignore
        "--rotate": `${baseAngle}deg`,
        transform: "rotate(var(--rotate))",
        willChange: "transform",
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      {spans}
    </div>
  );
};

export default BackgroundLines;
