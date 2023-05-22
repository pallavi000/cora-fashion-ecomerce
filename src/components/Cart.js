import React from "react";
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline";

function Cart() {
  return (
    <div>
      <div className="flex justify-between items-center py-6 border-gray-200 border-b">
        <div className="flex items-center gap-4">
          <img
            scr="/images/cart.png"
            height={100}
            width={100}
            className="h-[75px] w-[80px]"
          />
          <div className="flex-col gap-2">
            <div className=" font-medium">Coach</div>
            <div className="text-gray-600  ">Leather Coach Bag</div>
            <div className="flex items-center font-medium gap-2 px-2 py-1 mt-2  rounded-md border w-fit border-blue-950">
              <PlusIcon className="h-4 w-4" />
              <div className="text-sm">1</div>
              <MinusIcon className="h-4 w-4" />
            </div>
          </div>
          <div className="flex flex-col justify-between items-end gap-12">
            <div>
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            </div>
            <div className="font-medium text-lg">$54.69</div>
          </div>
        </div>
      </div>

      <div className=" flex-col gap-8 items-center my-6">
        <div className="flex justify-between items-center font-lg mb-2 ">
          <div>Subtotal :</div>
          <div>$ 109.00</div>
        </div>
        <div className="flex justify-between items-center font-lg mb-2 ">
          <div>Tax :</div>
          <div>$ 2.00</div>
        </div>
        <div className="flex justify-between items-center font-lg font-medium mb-2 ">
          <div>Total :</div>
          <div>$ 111.00</div>
        </div>
      </div>
      <div className="bg-gray-200 p-3 rounded-md flex justify-between items-center mb-6">
        <div className="font-medium  text-gray-600">Apply Coupon Code</div>
        <div className="font-medium  text-blue-950 cursor-pointer">CHECK</div>
      </div>
      <div className=" cursor-pointer p-2 bg-blue-950 text-white text-lg font-medium rounded-lg text-center">
        Place Order
      </div>
      <div className="mt-6 cursor-pointer text-blue-950 text-lg font-medium text-center underline ">
        Continue Shopping
      </div>
    </div>
  );
}

export default Cart;
