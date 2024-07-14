"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { clearCache } from "@/utils/clearCache";
import Image from "next/image";

export const RefreshButton: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const onClick = () => {
    setLoading(true);
    clearCache();
    router.refresh();
    setTimeout(() => setLoading(false), 5000);
  };

  React.useEffect(() => {
    if (loading) {
    }
  }, [loading]);

  return (
    <button
      className={`fixed bottom-8 right-8 flex items-center justify-center text-2xl rounded-full bg-white p-1 max-w-8 max-h-8 ${
        loading ? "animate-spin" : ""
      }`}
      onClick={onClick}
    >
      <Image src="/refresh.svg" width={24} height={24} alt="refresh" />
    </button>
  );
};
