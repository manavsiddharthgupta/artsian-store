import { Card } from "@/components/card";
import Footer from "@/components/footer";
import { extrasInfo } from "@/lib/store";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    page: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageInfo = extrasInfo.find(
    (pageDetail) => pageDetail.href === params.page
  );
  const id = pageInfo?.name || params.page;
  return {
    title: `${id} | Artsian`,
    description: "E-Commerece for Tech Enthusiasts",
  };
}

const Page = ({ params }: Props) => {
  if (!extrasInfo.some((pageDetail) => pageDetail.href === params.page)) {
    notFound();
  }
  return (
    <Card>
      <div className="min-h-screen">
        <h1 className="text-lg font-medium">{params.page}</h1>
        <p className="text-sm font-medium mt-1">This is a demo site</p>
      </div>
      <Footer />
    </Card>
  );
};

export default Page;
