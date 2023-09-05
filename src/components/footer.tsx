import { FollowUs } from "@/components/follow-us";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks_1 = ["All", "Home", "Deals"];
  const footerLinks_2 = [
    "Terms & Conditions",
    "Shopping & Return Policy",
    "Privacy Policy",
  ];
  return (
    <footer className="mt-8">
      <div className="flex items-start py-2 px-4 gap-14 max-sm:flex-col max-sm:gap-8 transition-all duration-200 ease-in-out">
        <Logo />
        <div className="flex gap-20 py-6 max-[860px]:flex-col max-[860px]:gap-6 transition-all duration-200 ease-in-out">
          <FollowUs />
          <ul>
            {footerLinks_1.map((item) => (
              <li
                key={item}
                className="hover:text-black text-sm hover:underline underline-offset-2 cursor-pointer transition-colors duration-100 ease-in-out mb-2"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul>
            {footerLinks_2.map((item) => (
              <li
                key={item}
                className="hover:text-black text-sm hover:underline underline-offset-2 cursor-pointer transition-colors duration-100 ease-in-out mb-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Separator className="my-4 bg-[#6b676223]" />
      <div className="flex items-center pb-4 justify-center gap-2 text-xs max-sm:flex-col">
        <p className="text-center">© 2023 ARTSIAN, Inc. All rights reserved.</p>
        <span className="max-sm:hidden">|</span>
        <p className="text-center">Designed by Artsian Team.</p>
      </div>
    </footer>
  );
};

export default Footer;
