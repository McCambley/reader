"use client";

import React from "react";

export const RefreshButton: React.FC = () => {
  const onClick = () => {
    window.location.reload();
  };

  return (
    <button
      className="fixed bottom-4 right-4 rounded-lg bg-white p-1 min-w-8 min-h-8 filter grayscale"
      onClick={onClick}
    >
      ♻️
    </button>
  );
};
