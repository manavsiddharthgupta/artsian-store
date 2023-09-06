import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const Drawer = ({
  isOpen,
  closeNavDrawer,
  children,
  from,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  closeNavDrawer: () => void;
  from?: "left" | "right";
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeNavDrawer}>
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-[1px]"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="opacity-100 backdrop-blur-[1px]"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div className="fixed inset-0 bg-[#eeeae6] bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-x-hidden overflow-y-auto">
          <div className="min-h-full p-4">
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-in-out duration-300"
              enterFrom={
                from === "right" ? "translate-x-[100%]" : "translate-x-[-100%]"
              }
              enterTo="translate-x-0"
              leave="transition-all ease-in-out duration-200"
              leaveFrom="translate-x-0"
              leaveTo={
                from === "right" ? "translate-x-[100%]" : "translate-x-[-100%]"
              }
            >
              {children}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
