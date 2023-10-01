"use client";

import { useSearchParams } from "next/navigation";

import { Card } from "@/components/card";
import Footer from "@/components/footer";
import { SideBar } from "@/components/sidebar";

const Search = () => {
  const searchParams = useSearchParams();
  const searchfor = searchParams.get("q");

  return (
    <Card>
      <div className="flex min-h-screen">
        <SideBar />
        <div className="w-[calc(100%-120px)] max-sm:w-full">
          {searchfor && <p>you are searching for - {searchfor}</p>}
          {!searchfor && <p>All Products</p>}
          {searchfor && (
            <p className="mt-1">
              There are no products that match{" "}
              <span className="font-semibold">"{searchfor}"</span>
            </p>
          )}
          {!searchfor && (
            <p className="mt-1">There are no products available right now :(</p>
          )}
        </div>
      </div>
      <Footer />
    </Card>
  );
};

export default Search;
