"use client";
import { LINKS, DEFAULT_PATH, HOME } from "@/app/constants";
import { useSwipeable } from "react-swipeable";
import { usePathname, useRouter } from "next/navigation";

export const useSwipePage = () => {
  const path = usePathname();
  const router = useRouter();
  const indexOfCurrentPath = LINKS.indexOf(path || DEFAULT_PATH);

  const goToNextPage = () => {
    const nextPath = LINKS[indexOfCurrentPath + 1] || DEFAULT_PATH;
    router.push(nextPath);
  };
  const goToPreviousPage = () => {
    const previousPath =
      LINKS[indexOfCurrentPath - 1] || LINKS[LINKS.length - 1];
    router.push(previousPath);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextPage(),
    onSwipedRight: () => goToPreviousPage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  return { handlers };
};
