import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Cart from "./Cart";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

function CartPopup({ setIsOpen, isOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed right-0 top-[76px] overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title>
                  <div className="flex items-center justify-start text-blue-950 px-6  pb-0 gap-8 cursor-pointer">
                    <ArrowSmallLeftIcon className="h-8 w-8 text-blue-950" />
                    <div className="text-2xl font-medium">Back</div>
                  </div>
                </Dialog.Title>
                <Cart />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
export default CartPopup;
