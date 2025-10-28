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
    <form
      action="/search"
      className="flex gap-2 fixed w-full bottom-0 left-0 px-2 py-2 h-10"
    >
      <label htmlFor="query" className="hidden">
        Search
      </label>
      <input
        type="text"
        id="query"
        placeholder="Search..."
        name="query"
        value={value}
        onChange={handleChange}
        className=" rounded-full border-neutral-50 border pl-2 w-full search-input"
      />
      <button type="submit" className="border px-2 rounded-full search-input">
        search
      </button>
    </form>
  );
};

export default SearchInput;
