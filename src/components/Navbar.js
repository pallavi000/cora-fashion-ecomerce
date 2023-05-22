import React, { useState } from "react";
import LogoImg from "../images/logo.png";
import Image from "next/image";
import {
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import CartPopup from "./CartPopup";
import Link from "next/link";

function Navbar() {
  let [isOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="grid grid-cols-2 w-full p-8">
        <div className="flex items-center gap-8 col-span-1">
          <Link href={"/"}>
            <Image
              src={LogoImg}
              className="h-6 w-auto "
              height={100}
              width={100}
            />
          </Link>
          <Link
            href={"/category"}
            className="text-gray-900 text-lg font-semibold cursor-pointer"
          >
            Handbags
          </Link>
          <Link
            href={"/category"}
            className="text-gray-900  text-lg font-semibold cursor-pointer"
          >
            Watches
          </Link>
          <Link
            href={"/category"}
            className="text-gray-900  text-lg font-semibold cursor-pointer"
          >
            SkinCare
          </Link>
          <Link
            href={"/category"}
            className="text-gray-900  text-lg font-semibold cursor-pointer"
          >
            Jewellery
          </Link>
          <Link
            href={"/category"}
            className="text-gray-900  text-lg font-semibold cursor-pointer"
          >
            Apparels
          </Link>
        </div>
        <div className="flex justify-end items-center gap-4 col-span-1">
          <input
            placeholder="Search for products or brands....."
            className="text-gray-500 text-sm  bg-gray-100 px-4 py-3 rounded-md outline-0 border-0 w-1/2 "
          />
          <div className="flex items-center gap-4">
            <HeartIcon className="h-8 w-8 text-gray-500" />
            <UserIcon className="h-8 w-8 text-gray-500" />
            <ShoppingBagIcon
              onClick={() => openModal()}
              className="h-8 w-8 text-gray-500"
            />
          </div>
        </div>
      </div>
      {isOpen && <CartPopup isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Navbar;
