import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BodyLayoutProps {
  className?: string;
  children?: ReactNode;
}

export const BodyLayout: FC<BodyLayoutProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={twMerge(
        "h-full w-full rounded-[28px] p-[40px] borde border-[#D9D7EE] bg-gray-400 text-black",
        className
      )}
    >
      {children}
    </div>
  );
};
