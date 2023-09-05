import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category | Artsian Store",
  description: "E-Commerece for Tech Enthusiasts",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
