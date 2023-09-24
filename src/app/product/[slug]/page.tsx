"use client";
import { useState } from "react";
import { Card } from "@/components/card";
import prod from "@/assets/prod.avif";
import prod2 from "@/assets/prod2.avif";
import prod3 from "@/assets/prod3.avif";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { useCart } from "@/lib/cart";
import { useToast } from "@/components/ui/use-toast";

const Product = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const [selectedImage, setImage] = useState(0);
  const searchParams = useSearchParams();
  const selectedColor = searchParams.get("color");
  const selectedSize = searchParams.get("size");

  const router = useRouter();
  const cart = useCart();
  const { toast } = useToast();

  const addToCart = () => {
    cart.addItem({
      id: `${params.slug}-${selectedColor}-${selectedSize}`,
      name: "Artemis Circle T-Shirt",
      size: selectedSize,
      color: selectedColor,
      price: 32.0,
      quantity: 1,
    });
    toast({
      title: "Added to Cart",
      description: `artemis circle t-shirt, size: ${selectedSize}, color: ${selectedColor}`,
      duration: 2000,
    });
  };

  const images = [prod, prod2, prod3];

  const colors = [
    {
      name: "black",
      link: "color=black",
    },
    {
      name: "white",
      link: "color=white",
    },
    {
      name: "blue",
      link: "color=blue",
    },
  ];

  const sizes = [
    {
      name: "xs",
      link: "size=xs",
    },
    {
      name: "s",
      link: "size=s",
    },
    {
      name: "m",
      link: "size=m",
    },
    {
      name: "l",
      link: "size=l",
    },
    {
      name: "xl",
      link: "size=xl",
    },
  ];

  const setSize_Color = (val: string) => {
    if (val.includes("color")) {
      if (selectedSize) {
        router.replace(`/product/${params.slug}?${val}&size=${selectedSize}`, {
          scroll: false,
        });
      } else {
        router.replace(`/product/${params.slug}?${val}`, { scroll: false });
      }
    } else if (val.includes("size")) {
      if (selectedColor) {
        router.replace(
          `/product/${params.slug}?color=${selectedColor}&${val}`,
          { scroll: false }
        );
      } else {
        router.replace(`/product/${params.slug}?${val}`, { scroll: false });
      }
    }
  };

  return (
    <Card>
      <div className="max-lg:flex-col flex gap-12 py-8 px-4 max-lg:px-0">
        <div className="w-[60%] max-lg:w-full">
          <Image
            src={images[selectedImage]}
            alt="product_1"
            placeholder="blur"
          />
          <div className="flex justify-center">
            <ul className="flex gap-2 w-fit">
              {images.map((image, index) => {
                return (
                  <li key={index}>
                    <Button
                      className={`w-14 h-14 rounded-md border-[1px] border-[#6b6762]/50 shadow-sm transition-all ease-in-out duration-200 hover:border-[#53B18D] hover:bg-transparent bg-transparent ${
                        index === selectedImage
                          ? "outline-[3px] outline-[#53B18D] outline border-none"
                          : ""
                      }`}
                      onClick={() => setImage(index)}
                    >
                      <Image
                        src={image}
                        className="scale-[2.5]"
                        alt="product_1"
                        placeholder="blur"
                      />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-1">Acme Circles T-Shirt</h1>
          <span className="text-white inline-block min-w-fit font-semibold pb-1 px-[6px] pt-[6px] rounded-full bg-[#53B18D] text-xs">
            $32.00 USD
          </span>
          <Separator className="my-6 bg-[#6b676223]" />
          <div>
            <p className="text-sm font-semibold">COLOR</p>
            <ul className="mt-3 flex gap-2">
              {colors.map((color) => {
                return (
                  <li key={color.link}>
                    <Button
                      className={`px-2 bg-white/30 text-[#6b6762] hover:bg-white/30 hover:text-[#6b6762] hover:scale-110 border-[#6b6762] transition-all ease-in-out duration-200 h-fit py-1 text-xs capitalize rounded-xl ${
                        color.name === selectedColor
                          ? "outline-[3px] outline-[#53B18D] outline"
                          : "border-[1px]"
                      }`}
                      onClick={() => setSize_Color(color.link)}
                    >
                      {color.name}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold">SIZE</p>
            <ul className="mt-3 flex gap-2">
              {sizes.map((size) => {
                return (
                  <li key={size.link}>
                    <Button
                      className={`px-3 bg-white/30 text-[#6b6762] hover:bg-white/30 hover:text-[#6b6762] hover:scale-110 border-[#6b6762] transition-all ease-in-out duration-200 h-fit py-1 text-xs uppercase rounded-xl ${
                        size.name === selectedSize
                          ? "outline-[3px] outline-[#53B18D] outline"
                          : "border-[1px]"
                      }`}
                      onClick={() => setSize_Color(size.link)}
                    >
                      {size.name}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="text-xs font-medium my-6">
            60% combed ringspun cotton/40% polyester jersey tee.
          </p>
          <Button
            disabled={selectedColor && selectedSize ? false : true}
            onClick={addToCart}
            className="bg-[#53B18D]/80 text-white hover:bg-[#53B18D] transition-all ease-in-out duration-300 w-full text-xl py-6 rounded-full"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <Separator className="my-4 bg-[#6b676223]" />
      <Footer />
    </Card>
  );
};

export default Product;
