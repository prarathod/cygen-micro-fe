import { cn } from "@utils/utils";
import { ReactNode } from "react";

type ContentContainerType = {
  children: ReactNode;
  className?: string;
};

function ContentContainer({ children, className }: ContentContainerType) {
  return (
    <div
      className={cn("rounded-2xl border-[1px] p-9", className)}
      style={{
        background: "radial-gradient(ellipse at top left, #334155, #020617)",
        backdropFilter:"blur(10px)"
      }}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
