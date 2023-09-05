import { Card } from "@/components/card";
import Footer from "@/components/footer";
import { SideBar } from "@/components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Artsian Store",
  description: "E-Commerece for Tech Enthusiasts",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card>
      <div className="flex min-h-screen">
        <SideBar />
        {children}
      </div>
      <Footer />
    </Card>
  );
}
