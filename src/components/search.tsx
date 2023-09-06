import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const Search = ({
  searchCategory,
  handleSearch,
  isDrawerOpen,
  closeDrawer,
}: {
  searchCategory: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDrawerOpen?: boolean;
  closeDrawer?: () => void;
}) => {
  const router = useRouter();

  useEffect(() => {
    console.log("close drawer");
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 860 && closeDrawer) {
        closeDrawer();
      }
    });
  }, [closeDrawer]);

  const onHitEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchCategory === "") {
        router.push("/search");
      } else {
        router.push("/search?q=" + searchCategory);
      }
      if (isDrawerOpen && closeDrawer) {
        closeDrawer();
      }
    }
  };

  return (
    <div className="relative w-full">
      <Input
        className="w-full border-[1px] border-[#6b67621e] shadow-none placeholder:text-[#524e4aca]"
        placeholder="Search for products..."
        value={searchCategory}
        onChange={handleSearch}
        onKeyDown={onHitEnterKey}
      />
      <MagnifyingGlassIcon className="absolute top-1/2 right-3 transform -translate-y-1/2" />
    </div>
  );
};
