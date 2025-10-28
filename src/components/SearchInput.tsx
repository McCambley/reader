"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import { redirect } from "next/navigation";
import Link from "next/link";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";
  const [value, setValue] = useState(query);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
  };

  return (
    <form action="/search" className="pb-2 flex gap-2">
      <label htmlFor="query" className="hidden">
        Search
      </label>
      <input
        type="text"
        id="query"
        name="query"
        value={value}
        onChange={handleChange}
        className="bg-transparent rounded-full border-neutral-50 border pl-1"
      />
      <button type="submit" className="border px-2 rounded-full">
        search
      </button>
    </form>
  );
};

export default SearchInput;
