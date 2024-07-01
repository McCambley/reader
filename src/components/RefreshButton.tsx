"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { clearCache } from "@/utils/clearCache";

export const RefreshButton: React.FC = () => {
  const router = useRouter();
  const onClick = () => {
    clearCache();
    router.refresh();
  };

  return (
    <button
      className="fixed bottom-8 right-8  text-2xl rounded-lg bg-white p-1 min-w-12 min-h-12 filter grayscale active:filter-none hover:filter-none active:scale-95"
      onClick={onClick}
    >
      ♻️
    </button>
  );
};
