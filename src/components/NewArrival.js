import React from "react";

import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NewArrival({ item }) {
  return (
    <Link href={"/product-detail"}>
      <div className="  gap-2">
        <img
          src={item.img}
          className="h-[280px] w-[280px] "
          height={100}
          width={100}
        />
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex  flex-col gap-1">
          <div className="font-bold text-sm">{item.brand}</div>
          <div className=" text-gray-600 font-medium text-sm">{item.name}</div>
          <div className="font-bold text-sm"> $ {item.price}</div>
        </div>
        <div>
          <HeartIcon className="h-6 w-6 font-semibold" />
        </div>
      </div>
    </Link>
  );
}

export default NewArrival;
