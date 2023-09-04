import { FollowUs } from "@/components/follow-us";
import { Logo } from "@/components/logo";

const Footer = () => {
  const footerLinks_1 = ["All", "Home", "Deals"];
  const footerLinks_2 = [
    "Terms & Conditions",
    "Shopping & Return Policy",
    "Privacy Policy",
  ];
  return (
    <footer className="flex items-start py-6 px-4 gap-14">
      <Logo />
      <div className="flex gap-12 py-6">
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
    </footer>
  );
};

export default Footer;
