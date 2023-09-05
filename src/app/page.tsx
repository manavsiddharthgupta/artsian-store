import { Card } from "@/components/card";
import Footer from "@/components/footer";
import { MainProduct, ProductCard } from "@/components/products-card";
import prod from "@/assets/prod.avif";
import bag from "@/assets/bag.avif";
import key from "@/assets/key.png";

export default function Home() {
  return (
    <Card>
      <div className="flex justify-between my-2">
        <div className="w-[66.25%]">
          <MainProduct
            productName="Artemis Circle T-Shirt"
            productPrice={20.0}
            imageSrc={prod}
          />
        </div>
        <div className="w-[32%] flex flex-col justify-between">
          <ProductCard
            productName="Artemis Circle Bag"
            productPrice={12.0}
            imageSrc={bag}
          />
          <ProductCard
            productName="Artemis Circle KeyBoard"
            productPrice={32.0}
            imageSrc={key}
          />
        </div>
      </div>
      <Footer />
    </Card>
  );
}
