import Link from "next/link";
import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const MobileNav = ({
  sidebarOpen,
  setSidebarOpen,
  headerData,
  cartItems,
  session,
  user,
  logout,
}) => {
  return (
    <nav>
      <div className="block xl:hidden">
        <div
          className={`overflow-y-auto bg-white z-40 flex pt-5 top-0 flex-col h-screen w-full max-w-[300px] fixed bg-base-200  duration-500 ease-in  gap-2 md:gap-0 shadow-xl ${
            sidebarOpen ? "left-0" : "-left-full"
          }`}
        >
          <div className="relative flex flex-col gap-5 px-5 pb-6 mt-4 text-lg font-normal leading-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-md text-base-content/80">Menu</h4>
              <svg
                className="cursor-pointer text-base-content w-4 h-4"
                onClick={() => setSidebarOpen((prev) => !prev)}
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9L9 1M1 1L9 9"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* logout button section */}
            {session?.user ? (
              <button
                onClick={() => {
                  signOut();
                  setSidebarOpen(false);
                }}
                className="bg-red-500 text-[#fff] hover:bg-[#2b6777] px-2 py-1 transition-transform active:scale-95 hover:opacity-75 rounded shadow"
              >
                Sign Out
              </button>
            ) : user?.email ? (
              <button
                onClick={() => {
                  logout();
                  setSidebarOpen(false);
                }}
                className="bg-red-500 text-[#fff] hover:bg-[#2b6777] px-2 py-1 transition-transform active:scale-95 hover:opacity-75 rounded shadow"
              >
                Sign Out
              </button>
            ) : (
              <Link href={"/login"} className="hover:text-[#fff]">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="w-fit bg-[#52ab98] text-[#fff] hover:bg-[#2b6777] px-2 py-1 transition-transform active:scale-95 hover:opacity-75 rounded shadow"
                >
                  Sign In
                </button>
              </Link>
            )}
            {/*  menu lists */}
            <div className="flex flex-col">
              {headerData.map((item, index) => (
                <SubMenu
                  item={item}
                  setSidebarOpen={setSidebarOpen}
                  key={index}
                  cartItems={cartItems}
                />
              ))}
            </div>
            <div className="flex justify-start items-start gap-5">
              <Link href="/cart">
                <div className="w-full rounded-full cursor-pointer relative">
                  <BsCart className="text-[24px]" />
                  {cartItems.length > 0 && (
                    <div className="h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-[-5px] left-3 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                      {cartItems.length}
                    </div>
                  )}
                </div>
              </Link>
              <Link href="/cart">
                <div className="w-full rounded-full cursor-pointer relative">
                  <FiHeart className="text-[24px]" />
                  {cartItems.length > 0 && (
                    <div className="h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-[-5px] left-3 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                      {cartItems.length}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* bg overlay */}
      <div
        className={`xl:hidden fixed top-0 z-30 transition-all duration-500 ease-in-out bg-[#1B2631] opacity-80 h-full w-full ${
          sidebarOpen ? "left-0" : "-left-full"
        }`}
        onClick={() => setSidebarOpen(false)}
      />
    </nav>
  );
};

export default MobileNav;

const SubMenu = ({ item, setSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex flex-col border-b border-base-content/10 last-of-type:border-0 hover:bg-base-200`}
    >
      {item.subMenu ? (
        <span className="text-base text-base-content/80 flex items-center justify-between gap-2">
          {item.name}
          <div
            className="w-10 flex justify-center items-center flex-none py-3 h-fit"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              className={`fill-current w-5 h-5 transform transition-all duration-300 ease-in-out ${
                open ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
        </span>
      ) : (
        <Link
          href={item.link}
          className={`link block link-hover text-base text-base-content/80 hover:text-primary transition hover:duration-300 font-work ${
            item.subMenu ? "" : "!py-3 last-of-type:pb-0 first-of-type:pt-0"
          }`}
          onClick={() => {
            setOpen(false);
            setSidebarOpen(false);
          }}
        >
          {item.name}
        </Link>
      )}
      {item.subMenu && (
        <ul
          className={`flex flex-col ${
            open
              ? "opacity-100 visible  transition-opacity duration-500"
              : "opacity-0 invisible h-0"
          }`}
        >
          {item.subMenu.map((subItem, index) => (
            <li
              key={index}
              className={`border-b border-base-content/10 last-of-type:border-0 pl-3 first-of-type:border-t hover:bg-base-200`}
            >
              {subItem.subMenu ? (
                <SubMenu item={subItem} setSidebarOpen={setSidebarOpen} />
              ) : (
                <Link
                  href={subItem.link}
                  className={`link block link-hover text-base text-base-content/80 hover:text-primary transition hover:duration-300 font-work ${
                    subItem.subMenu ? "" : "py-3"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    setSidebarOpen(false);
                  }}
                >
                  {subItem.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
