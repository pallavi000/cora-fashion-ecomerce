import React from "react";
import {
  ChevronRightIcon,
  ShoppingBagIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import DetailTab from "@/components/DetailTab";

export default function index() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex-col gap-2">
          <img
            src="/images/product-image.png"
            className="h-[500px] w-[600px]"
          />
          <img
            src="/images/product-photos.png"
            className="h-[75px] w-[473px] my-5"
          />
        </div>
        <div className="col-span-1">
          <div className="text-3xl font-medium ">Coach</div>
          <div className="text-lg text-gray-600 font-medium mt-1 ">
            Leather Coach Bag with adjustable starps.
          </div>
          <div>
            <div>
              <img src="/images/ratings.png" className="text-center my-5" />
            </div>
            <div className="text-3xl font-bold pb-5 border-b border-gray-200">
              $54.90{" "}
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between items-center my-6">
            <div className="col-span-1 flex-col gap-2 items-center">
              <div className="text-xl font-medium">Delivery Details</div>
              <div className="text-gray-600 text-sm">
                Check estimated delivery date/pickup option.
              </div>
            </div>
            <div className="col-span-2 w-full bg-gray-200 flex items-center justify-between p-3 rounded-md w-1/2">
              <input
                placeholder="Apply Valid Pincode"
                className="text-gray-600 text-sm bg-gray-200 px-4   rounded-md border-0 outline-0 "
              />
              <div className="text-blue-950 font-medium">Check</div>
            </div>
          </div>

          <div className="flex items-center my-8 gap-2">
            <div className="text-xl font-medium">Quantity : </div>
            <div className="flex items-center font-medium gap-2 px-2 py-1 mt-2  rounded-md border w-fit border-blue-950">
              <PlusIcon className="h-4 w-4" />
              <div className="text-sm">1</div>
              <MinusIcon className="h-4 w-4" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-8">
            <button className="bg-blue-950 p-2 w-full gap-2 rounded-md text-white font-medium justify-center  text-sm flex items-center">
              <ShoppingBagIcon className="h-4 w-4" /> Add to bag
            </button>
            <button className="border-blue-950 border p-2 gap-2 w-full rounded-md text-blue-950 font-medium  justify-center text-sm flex items-center">
              <HeartIcon className="h-4 w-4" /> Add to wishlist
            </button>
          </div>
        </div>
      </div>
      <DetailTab />
    </div>
  );
}
