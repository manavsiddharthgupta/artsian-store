"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Logo } from "./logo";
import { navItems } from "@/lib/store";

const Navbar = () => {
  const [searchCategory, setCategory] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onHitEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchCategory === "") {
        router.push("/search");
        return;
      }
      router.push("/search?q=" + searchCategory);
    }
  };

  return (
    <nav className="flex justify-between px-8 py-4 items-center text-[#6b6762]">
      <div className="hidden max-[860px]:block border-[1px] solid border-black/30 rounded-md p-3 cursor-pointer">
        <Bars3Icon className="w-4 h-4" />
      </div>
      <div className="flex items-center gap-8">
        <Logo />
        <ul className="flex gap-4 text-[15px] max-[860px]:hidden">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <li className="hover:text-black hover:underline underline-offset-2 cursor-pointer transition-colors duration-100 ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="relative w-96 max-[860px]:hidden">
          <Input
            className="w-full border-[1px] border-[#6b67621e] shadow-none placeholder:text-[#524e4aca]"
            placeholder="Search for products..."
            value={searchCategory}
            onChange={handleSearch}
            onKeyDown={onHitEnterKey}
          />
          <MagnifyingGlassIcon className="absolute top-1/2 right-3 transform -translate-y-1/2" />
        </div>
      </div>
      <div className="border-[1px] solid border-black/30 rounded-md p-3 cursor-pointer">
        <ShoppingCartIcon className="w-4 h-4" />
      </div>
    </nav>
  );
};

export default Navbar;
