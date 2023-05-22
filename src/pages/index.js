import Image from "next/image";
import HeroImg from "../images/hero.png";
import NewArrival from "@/components/NewArrival";
import FirstImg from "../images/img1.png";
import SecondImg from "../images/img2.png";
import ThirdImg from "../images/img3.png";
import FourthImg from "../images/img4.png";
import Hand1Img from "../images/hand1.png";
import Hand2Img from "../images/hand2.png";
import Hand3Img from "../images/hand3.png";
import Hand4Img from "../images/hand4.png";
import Brand1Img from "../images/brand1.png";
import Brand2Img from "../images/brand2.png";
import Brand3Img from "../images/brand3.png";
import Brand4Img from "../images/brand4.png";
import Brand5Img from "../images/brand5.png";
import Brand6Img from "../images/brand6.png";
import Hero2Img from "../images/hero2.png";
import LeftImg from "../images/left.png";
import RightImg from "../images/right.png";

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
];

const brands = [
  Brand1Img,
  Brand2Img,
  Brand3Img,
  Brand4Img,
  Brand5Img,
  Brand6Img,
];

const handImages = [
  "/images/hand1.png",
  "/images/hand2.png",
  "/images/hand3.png",
  "/images/hand4.png",
];
export default function Home() {
  return (
    <div className="">
      <div className="bg-gray-200 py-4 text-sm text-gray-900 text-center">
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status here
      </div>
      <div className="relative mt-8">
        <div className="h-[500px] w-full p-8">
          <img
            src="/images/hero.png"
            className="h-full w-full object-cover rounded-lg"
            height={100}
            width={100}
          />
        </div>
      </div>
      <div className="p-8">
        <div className="text-3xl font-semibold text-gray-900">New Arrivals</div>

        <div className="flex gap-12 py-12 justify-center ">
          {items.map((item) => {
            return <NewArrival item={item} />;
          })}
        </div>
      </div>
      <div className="p-8 py-12 bg-blue-950">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold text-white py-4">
            Handpicked Collection
          </div>
          <div className=" text-white text-sm font-medium cursor-pointer">
            View All
          </div>
        </div>
        <div className="flex gap-12 py-12 w-full justify-center ">
          {handImages.map((item) => {
            return (
              <img
                src={item}
                height={100}
                width={100}
                className="h-[280px] w-[280px]"
              />
            );
          })}
        </div>
      </div>

      <div className="p-8 py-10">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold text-gray-900 mt-8">
            Shop by Brand
          </div>
        </div>
        <div className="flex gap-14 py-12  justify-center ">
          {brands.map((item) => {
            return <Image src={item} className="h-168 w-168 object-cover" />;
          })}
        </div>
      </div>
      <div className="px-8 pt-4 pb-12">
        <img
          src="/images/hero2.png"
          className="h-300 w-full object-cover rounded-md"
          height={100}
          width={100}
        />
      </div>
      <div className="p-8 flex items-center gap-8 mb-12">
        <img
          src="/images/right.png"
          className="h-300 w-full object-cover rounded-md"
          height={100}
          width={100}
        />
        <img
          src="/images/left.png"
          className="h-300 w-full object-cover rounded-md"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
