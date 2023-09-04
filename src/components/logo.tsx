import Image from "next/image";
import artSian from "@/assets/artsian-logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Image src={artSian} alt="logo" width={35} height={35} />
      <h1 className="font-semibold text-[#6b6762]">ARTSIAN</h1>
    </div>
  );
};
