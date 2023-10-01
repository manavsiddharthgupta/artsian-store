import { CartItem, useCart } from "@/lib/cart";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Separator } from "@/components/ui/separator";
import image from "@/assets/prod.avif";
import Image from "next/image";
import { SheetContent } from "@/components/ui/sheet";
import { useToast } from "./ui/use-toast";

export const Cart = () => {
  const cart = useCart();
  const { toast } = useToast();

  return (
    <SheetContent className="bg-[#eeeae6] text-[#6b6762] border-l-[1px] border-[#6b6762] max-sm:w-full">
      <div className="relative w-full h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">My Cart</h1>
        </div>
        <div className="my-8 h-[calc(100%-272px)] overflow-y-auto pr-2">
          {cart.items.length < 1 ? (
            <div className="mt-16 flex flex-col gap-2 items-center">
              <ShoppingCartIcon className="w-24 h-24" />
              <h1 className="font-semibold text-xl">Your cart is empty</h1>
            </div>
          ) : (
            cart.items.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })
          )}
        </div>
        {cart.items.length > 0 && (
          <div className="text-sm mt-12 absolute bottom-4 w-full">
            <div className="flex justify-between mt-4">
              <h1 className="font-light">Taxes</h1>
              <h1 className="font-medium">$14.00 USD</h1>
            </div>
            <Separator className="my-2 bg-[#6b676276]" />
            <div className="flex justify-between">
              <h1 className="font-light">Total</h1>
              <h1 className="font-medium">${cart.total} USD</h1>
            </div>
            <button
              className="w-full mt-4 h-12 bg-[#53B18D] text-white rounded-full font-semibold hover:bg-[#53B18D]/70"
              onClick={() => {
                toast({
                  title: "Order Can't be placed",
                  description: "This is a demo site.",
                  variant: "destructive",
                  duration: 2000,
                });
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </SheetContent>
  );
};

const CartItem = ({ item }: { item: CartItem }) => {
  const cart = useCart();
  const removeFromCart = () => {
    cart.removeItem(item.id);
  };

  const addToCart = () => {
    cart.addItem(item);
  };
  return (
    <>
      <div className="flex gap-4 justify-between items-center">
        <div className="w-14 h-14 border-[#6b6762] rounded-sm bg-[#6b676253] hover:bg-[#6b67628f] border-[1px]">
          <Image
            src={image}
            className="scale-125"
            alt="product_1"
            placeholder="blur"
          />
        </div>
        <div className="w-[calc(100%-172px)]">
          <h1 className="font-medium leading-4">{item.name}</h1>
          <p className="text-xs capitalize mt-0.5">
            {item.color} / {item.size}
          </p>
        </div>
        <div>
          <p className="font-medium text-sm text-right mb-1">
            ${item.price} USD
          </p>
          <div className="flex gap-1 items-center border-[#6b6762]/50 border-[1px] rounded-full">
            <button onClick={removeFromCart} className="px-2.5 py-0.5 h-fit">
              -
            </button>
            <p className="text-sm leading-3 mt-0.5 w-4 text-center">
              {item.quantity}
            </p>
            <button onClick={addToCart} className="px-2.5 py-0.5 h-fit">
              +
            </button>
          </div>
        </div>
      </div>
      <Separator className="my-4 bg-[#6b676223]" />
    </>
  );
};
