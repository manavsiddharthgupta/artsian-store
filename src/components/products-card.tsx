import Image, { StaticImageData } from "next/image";
import { Tags } from "./tag";

const classes = "hover:scale-105 transition-all duration-200 ease-in-out";

export const MainProduct = ({
  imageSrc,
  productName,
  productPrice,
}: {
  imageSrc: StaticImageData;
  productName: string;
  productPrice: number;
}) => {
  return (
    <div className="rounded-lg border-[1px] border-[#6b676223] hover:border-[#53B18D] cursor-pointer relative">
      <Image className={classes} src={imageSrc} alt="product_1" />
      <Tags type="main" name={productName} price={productPrice} />
    </div>
  );
};

export const ProductCard = ({
  imageSrc,
  productName,
  productPrice,
}: {
  imageSrc: StaticImageData;
  productName: string;
  productPrice: number;
}) => {
  return (
    <div className="rounded-lg border-[1px] border-[#6b676223] hover:border-[#53B18D] aspect-[1/1] cursor-pointer flex items-center group relative">
      <Image
        className="group-hover:scale-105 transition-all duration-200 ease-in-out"
        src={imageSrc}
        alt="product_1"
      />
      <Tags type="side" name={productName} price={productPrice} />
    </div>
  );
};
