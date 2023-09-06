"use client";

import { sideLinks } from "@/lib/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-[6px] text-sm w-full max-w-[120px] max-sm:hidden">
      <li className="text-xs text-[#53B18D]">Collections</li>
      {sideLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.name} href={link.href}>
            <li
              className={`hover:text-black hover:underline underline-offset-2 cursor-pointer transition-colors duration-100 ease-in-out w-fit ${
                isActive ? "text-black underline" : ""
              }`}
            >
              {link.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
