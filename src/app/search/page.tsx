"use client";

import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const searchfor = searchParams.get("q");

  return (
    <div className="w-[calc(100%-120px)]">
      {searchfor && <p>you are searching for - {searchfor}</p>}
      {!searchfor && <p>All Products</p>}
    </div>
  );
};

export default Search;
