import OverviewIcon from "../icons/overview.svg";
import ShoppingBagIcon from "../icons/shopping-bag.svg";
import GraphIcon from "../icons/graph.svg";
import CalendarIcon from "../icons/calendar.svg";
import WalletIcon from "../icons/wallet.svg";
import FileIcon from "../icons/file.svg";
import ChatIcon from "../icons/chat.svg";
import GroupChatIcon from "../icons/group-chat.svg";
import SettingsIcon from "../icons/settings.svg";
import LogoutIcon from "../icons/logout.svg";
import PlusIcon from "../icons/plus.svg";
import React, { Component } from "react";
import FigmaIcon from "../icons/figma.svg";
import SketchIcon from "../icons/sketch.svg";
import AIIcon from "../icons/ai.svg";

const sidebar = [
  [
    { name: "Overview", icon: OverviewIcon },
    { name: "Products", icon: ShoppingBagIcon },
    { name: "Analytics", icon: GraphIcon },
    { name: "Schedule", icon: CalendarIcon },
    { name: "Payout", icon: WalletIcon },
    { name: "Statements", icon: FileIcon },
  ],
  [
    { name: "Help", icon: ChatIcon },
    { name: "Community", icon: GroupChatIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Logout", icon: LogoutIcon },
  ],
];

const status = [
  { name: "Published" },
  { name: "Draft" },
  { name: "Hidden" },
  { name: "Rejected" },
  { name: "Under Review" },
];
const products = [
  {
    name: "Organic Landing page",
    category: "Web Design",
    imageUrl: "/img/organic-landing-page.png",
    price: 20,
    downloaded: 793,
    rating: 4.9,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/01/22",
  },
  {
    name: "Traffic Landing page",
    category: "Web Design",
    imageUrl: "/img/traffic-landing-page.png",
    price: 24,
    downloaded: 34,
    rating: 4.4,
    platformIcons: [FigmaIcon, AIIcon],
    createdAt: "10/01/22",
  },
  {
    name: "POS Dashboard",
    category: "Web Design",
    imageUrl: "/img/pos-dashboard.png",
    price: 16,
    downloaded: 896,
    rating: 4.6,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "01/01/22",
  },
  {
    name: "Gallery page",
    category: "Web Design",
    imageUrl: "/img/gallery-page.png",
    price: 38,
    downloaded: 194,
    rating: 4.6,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "04/01/22",
  },
  {
    name: "WFH Landing page",
    category: "Web Design",
    imageUrl: "/img/wfh-landing-page.png",
    price: 22,
    downloaded: 404,
    rating: 4.3,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/12/21",
  },
];

function ProductList() {
  return (
    <>
      <div className="flex text-gray-900 bg-gray-50 w-full font-sans min-h-screen">
        <aside className="py-6 px-10 w-64 border-r border-gray-200">
          <img src="/img/logo.png" alt="" className="w-28 " />

          {sidebar.map((s, index) => {
            return (
              <ul key={index} className="flex flex-col gap-y-6 pt-20">
                {s.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-500 group"
                    >
                      <span className="absolute rounded-r-full left-0 w-1.5  h-8 bg-indigo-600 -translate-x-full scale-y-0 group-hover:scale-y-100 group-hover:translate-x-0 ease-in-out transition-transform" />
                      <img src={item.icon} alt="" className="" />

                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            );
          })}
        </aside>

        <main className="flex-1 pb-8">
          <div className="flex items-center justify-between py-7 px-10">
            <div className=" ">
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
                Products
              </h1>
              <p className="text-sm font-medium text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </p>
            </div>
            <button className="items-center inline-flex hover:bg-indigo-700 gap-x-2 text-white py-2.5 px-6 rounded-xl bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
              <img src={PlusIcon} alt="" className="w-8 h-8" />
              <span className="text-sm font-semibold tracking-wide">
                Create Item
              </span>
            </button>
          </div>
          <ul className="flex gap-x-24 px-4 border-y border-gray-200">
            {status.map((s, i) => (
              <li key={i}>
                <button className="relative flex gap-x-2 py-5 px-6 justify-center items-center hover:text-indigo-500 group">
                  <span className="font-medium">{s.name}</span>
                  <span className="absolute w-full h-0.5 bg-black bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
                </button>
              </li>
            ))}
          </ul>

          <table className="w-full">
            <thead>
              <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                <td>
                  <div className="flex ml-4 items-center gap-x-4">
                    <input type="checkbox" name="" id="" />
                    <span> Product Name</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">Pricing</td>
                <td className="py-4 px-4 text-center">Downloaded</td>
                <td className="py-4 px-4 text-center">Rating</td>
                <td className="py-4 px-4 text-center">Platforms</td>
                <td className="py-4 px-4 text-center">Filter</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td className="flex gap-x-4 py-4 pl-10">
                    <input type="checkbox" name="" id="" />
                    <img
                      src={product.imageUrl}
                      alt=""
                      className=" w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-50"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.downloaded}</td>
                  <td>{product.rating}</td>
                  <td>
                    <div className="flex items-center justify-center gap-x-2">
                      {product.platformIcons.map((icon, i) => (
                        <img src={icon} className="h-4 w-4" />
                      ))}
                    </div>
                  </td>
                  <td>{product.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex gap-x-2 justify-center pt-4">
            <button className="flex items-center justify-center w-8 h-8 font-medium">
              a
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProductList;
