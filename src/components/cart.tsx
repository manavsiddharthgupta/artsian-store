import { Drawer } from "./Drawer";
import { Dialog } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Cross1Icon } from "@radix-ui/react-icons";

export const Cart = ({
  isOpenCart,
  closeCartDrawer,
}: {
  isOpenCart: boolean;
  closeCartDrawer: () => void;
}) => {
  return (
    <Drawer from="right" isOpen={isOpenCart} closeNavDrawer={closeCartDrawer}>
      <Dialog.Panel className="w-96 max-sm:w-full absolute top-0 right-0 h-full transform bg-[#eeeae6] text-[#6b6762] border-l-[1px] border-[#6b6762] p-6 transition-all">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">My Cart</h1>
          <div
            onClick={closeCartDrawer}
            className="w-fit h-fit border-[1px] solid border-black/30 rounded-md p-2 cursor-pointer shadow-sm"
          >
            <Cross1Icon className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-4">
          <div className="mt-16 flex flex-col gap-2 items-center">
            <ShoppingCartIcon className="w-24 h-24" />
            <h1 className="font-semibold text-xl">Your cart is empty</h1>
          </div>
        </div>
      </Dialog.Panel>
    </Drawer>
  );
};
