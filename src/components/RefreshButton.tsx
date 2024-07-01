"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const RefreshButton: React.FC = () => {
  const router = useRouter();
  const onClick = () => {
    // window.location.reload();
    router.refresh();
  };

  return (
    <button
      className="fixed bottom-8 right-8 rounded-lg bg-white p-1 min-w-8 min-h-8 filter grayscale"
      onClick={onClick}
    >
      ♻️
    </button>
  );
};
