import React from "react";
import CategoryImg from "../../images/category.png";
import Image from "next/image";
import {
  ChevronRightIcon,
  PlusIcon,
  ListBulletIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import NewArrival from "@/components/NewArrival";
import FirstImg from "../../images/img1.png";
import SecondImg from "../../images/img2.png";
import ThirdImg from "../../images/img3.png";
import FourthImg from "../../images/img4.png";

const items = [
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img1.png",
  },
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img2.png",
  },
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img3.png",
  },
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img4.png",
  },
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img2.png",
  },
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img3.png",
  },
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img1.png",
  },
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img2.png",
  },
  {
    brand: "Grande",
    name: "Blossom Pouch",
    price: 39.49,
    img: "/images/img3.png",
  },
];

function index() {
  return (
    <div className="p-8 pt-0">
      <div className="mb-10">
        <img
          src="/images/category.png"
          height={500}
          width={500}
          className="w-full h-[400px]"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="flex items-center gap-3 text-gray-600 font-medium text-sm">
            <div>Home</div>
            <div>
              <ChevronRightIcon className="h-6 w-6 text-sm" />
            </div>
            <div>Handbag</div>
          </div>
          <div className="font-bold text-2xl text-blue-900 my-4">HandBags</div>
          <div className="flex justify-between font-medium items-center   py-3 border-b border-gray-200 ">
            <div>Size</div>
            <div>
              <PlusIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-between font-medium items-center   py-3 border-b border-gray-200 ">
            <div>Color</div>
            <div>
              <PlusIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-between font-medium items-center   py-3 border-b border-gray-200 ">
            <div>Brand</div>
            <div>
              <PlusIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-between font-medium items-center   py-3 border-b border-gray-200 ">
            <div>Price Range</div>
            <div>
              <PlusIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-between font-medium items-center   py-3 border-b border-gray-200 ">
            <div>Discount</div>
            <div>
              <PlusIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex justify-between font-medium items-center   py-3 border-b border-gray-200 ">
            <div>Availability</div>
            <div>
              <PlusIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="col-span-3 px-8 mt-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <ListBulletIcon className="h-6 w-6 text-gray-600" />
              <div className="text-sm font-medium">
                Showing 1 - 40 of 145 items
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex items-center gap-3">
                <div className="font-medium text-sm">To Show :</div>
                <div className="bg-gray-200 h-12 w-12 rounded-md flex justify-center items-center font-medium text-gray-600">
                  9
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-medium text-sm">Short By :</div>
                <div className="text-sm bg-gray-200 py-4 px-3 gap-8 rounded-md flex justify-between items-center font-medium text-gray-600">
                  <div>Position </div>
                  <div>
                    <ChevronDownIcon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4  justify-center flex-wrap mt-8 ">
            {items.map((item) => {
              return <NewArrival item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
