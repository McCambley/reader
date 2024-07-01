"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

export const RefreshButton: React.FC = () => {
  const router = useRouter();
  const onClick = () => {
    revalidatePath("/");
    revalidatePath("/best");
    revalidatePath("/new");
    revalidatePath("/read");
    revalidatePath("/random");
    revalidatePath("/all");
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
