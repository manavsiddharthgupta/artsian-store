import { sideLinks } from "@/lib/store";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return {
    title: `${id} | Artsian`,
    description: "E-Commerece for Tech Enthusiasts",
  };
}

export default function Category({ params }: Props) {
  if (
    !sideLinks.some(
      (sideLink) =>
        sideLink.name.toLowerCase() === params.category.toLowerCase()
    )
  ) {
    console.log("not found");
    notFound();
  }
  return (
    <div>
      <p>{params.category}</p>
      <p className="mt-1">
        There are no products available right now in this category :(
      </p>
    </div>
  );
}
