import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Artsian Store",
  description: "E-Commerece for Tech Enthusiasts",
};

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
