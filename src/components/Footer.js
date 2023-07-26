import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-6 bg-blue-950 px-16 py-16 items-center">
        <div className="col-span-4 flex  gap-14">
          <div className="flex flex-col gap-2">
            <div className="text-xl text-white  mb-2 ">Shop by Category</div>
            <div className="text-gray-300 text-lg">Skincare</div>
            <div className="text-gray-300 text-lg">Personal care</div>
            <div className="text-gray-300 text-lg">Handbags</div>
            <div className="text-gray-300 text-lg">Apparels</div>
            <div className="text-gray-300 text-lg">Watches</div>
            <div className="text-gray-300 text-lg">Eyecare</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl text-white   mb-2">About</div>
            <div className="text-gray-300 text-medium text-lg">Skincare</div>
            <div className="text-gray-300 text-medium text-lg">
              Personal care
            </div>
            <div className="text-gray-300 text-medium text-lg">Handbags</div>
            <div className="text-gray-300 text-medium text-lg">Apparels</div>
            <div className="text-gray-300 text-medium text-lg">Watches</div>
            <div className="text-gray-300 text-medium text-lg">Eyecare</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl text-white mb-2">Policy</div>
            <div className="text-gray-300 text-medium text-lg">Skincare</div>
            <div className="text-gray-300 text-medium text-lg">
              Personal care
            </div>
            <div className="text-gray-300 text-medium text-lg">Handbags</div>
            <div className="text-gray-300 text-medium text-lg">Apparels</div>
            <div className="text-gray-300 text-medium text-lg">Watches</div>
            <div className="text-gray-300 text-medium text-lg">Eyecare</div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4 justify-end items-end">
          <div className="flex items-center justify-end gap-4">
            <span className=" bg-white h-12 w-12 opacity-60 rounded-full flex justify-center items-center ">
              <i class="fab fa-brands fa-facebook-f text-blue-900 text-2xl"></i>
            </span>
            <span className=" bg-white h-12 w-12 opacity-60 rounded-full flex justify-center items-center ">
              <i class="fab fa-brands fa-youtube text-blue-900 text-2xl"></i>
            </span>
            <span className=" bg-white h-12 w-12 opacity-60 rounded-full flex justify-center items-center ">
              <i class="fab fa-brands fa-twitter text-blue-900 text-2xl"></i>
            </span>
            <span className=" bg-white h-12 w-12 opacity-60 rounded-full flex justify-center items-center ">
              {" "}
              <i class="fab fa-brands fa-instagram text-blue-900 text-2xl"></i>
            </span>
          </div>
          <div className="text-lg text-white font-medium flex items-center gap-2 justify-end">
            <MapPinIcon className="h-6 w-6" /> United States
          </div>
          <div className=" text-gray-300 font-medium flex justify-end">
            © 2021 | Cora Leviene All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
