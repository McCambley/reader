"use client";
import { useSwipePage } from "@/hooks/useSwipePage";

export const SwipeableContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { handlers } = useSwipePage();
  return (
    <div className="w-full" {...handlers}>
      {children}
    </div>
  );
};
