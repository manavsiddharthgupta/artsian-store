import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";

export const FollowUs = () => {
  const styles =
    "w-4 h-4 hover:text-black transition-colors duration-100 ease-in-out cursor-pointer";
  return (
    <div>
      <p className="text-sm">Follow us</p>
      <div className="flex gap-1 items-center mt-2">
        <TwitterLogoIcon className={styles} />
        <InstagramLogoIcon className={styles} />
        <LinkedInLogoIcon className={styles} />
        <DiscordLogoIcon className={styles} />
      </div>
    </div>
  );
};
