"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Logo } from "./logo";
import { navItems } from "@/lib/store";
import { Dialog } from "@headlessui/react";
import { Search } from "./search";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Drawer } from "./slider";
import { Cart } from "./cart";
import { Badge } from "./ui/badge";
import { useCart } from "@/lib/cart";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [searchCategory, setCategory] = useState("");
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const router = useRouter();
  const cart = useCart();

  const totalItemInCart = cart.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const onNavigate = (link: string) => {
    router.push(link);
    closeNavDrawer();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const closeNavDrawer = useCallback(() => {
    setIsOpenNavbar(false);
  }, []);

  function openNavDrawer() {
    setIsOpenNavbar(true);
  }

  return (
    <nav className="flex justify-between px-8 py-4 items-center text-[#6b6762]">
      <button
        onClick={openNavDrawer}
        className="hidden max-[860px]:block border-[1px] solid border-black/30 rounded-md p-3 cursor-pointer"
      >
        <Bars3Icon className="w-4 h-4" />
      </button>
      <Drawer isOpen={isOpenNavbar} closeNavDrawer={closeNavDrawer}>
        <Dialog.Panel className="w-full absolute top-0 left-0 h-full transform bg-[#eeeae6] text-[#6b6762] p-6 transition-all ">
          <button
            onClick={closeNavDrawer}
            className="w-fit h-fit border-[1px] solid border-black/30 rounded-md p-3 cursor-pointer shadow-sm"
          >
            <Cross1Icon className="w-4 h-4" />
          </button>
          <div className="mt-4">
            <Search
              searchCategory={searchCategory}
              handleSearch={handleSearch}
              isDrawerOpen={isOpenNavbar}
              closeDrawer={closeNavDrawer}
            />
            {
              <ul className="flex flex-col gap-4 mt-4">
                {navItems.map((item) => (
                  <li
                    onClick={() => {
                      onNavigate(item.href);
                    }}
                    key={item.name}
                    className="hover:text-black cursor-pointer transition-colors duration-100 ease-in-out font-medium"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            }
          </div>
        </Dialog.Panel>
      </Drawer>
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
        <div className="w-96 max-[860px]:hidden">
          <Search searchCategory={searchCategory} handleSearch={handleSearch} />
        </div>
      </div>
      <Sheet>
        <div className="relative">
          <SheetTrigger asChild>
            <button
              // onClick={openCartDrawer}
              className="border-[1px] solid border-black/30 rounded-md p-3 cursor-pointer"
            >
              <ShoppingCartIcon className="w-4 h-4" />
            </button>
          </SheetTrigger>
          <Badge
            className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 px-1 bg-[#53B18D] text-white text-[10px] hover:bg-[#53B18D]"
            variant="secondary"
          >
            {totalItemInCart}
          </Badge>
        </div>
        <Cart />
      </Sheet>
    </nav>
  );
};

export default Navbar;
