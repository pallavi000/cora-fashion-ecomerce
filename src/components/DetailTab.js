import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DetailTab() {
  let [categories] = useState({
    "Product Description": [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    "Related Products": [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    "Ratings and Reviews": [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <div className="w-full max-w-full px-2 pb-16 pt-24 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-8">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul className="text-gray-600 font-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                scelerisque laoreet tortor cras molestie tincidunt malesuada
                malesuada. Neque, mauris duis dui id morbi magna. Cras lacus,
                viverra auctor in turpis est quisque eget tristique. Dolor augue
                mattis duis semper gravida enim eu imperdiet sit. Et pharetra
                platea pretium nec feugiat tincidunt quam leo tristique. Nulla
                enim consectetur sit et tempus, faucibus leo ac cras. Purus ut
                non eu mus volutpat. Eget est vel sagittis amet sit eu eu
                ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing
                elementum tristique dictumst augue pellentesque. Justo, sed
                nunc, pretium turpis scelerisque. Enim urna etiam morbi
                vestibulum ac dictumst. Ac ut elementum molestie sit felis
                imperdiet.
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default DetailTab;
