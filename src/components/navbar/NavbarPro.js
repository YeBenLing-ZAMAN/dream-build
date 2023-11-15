import React, { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { BsCart } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { useSession, signOut } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth.js";
import { signOut as signOutFireBase } from "firebase/auth";
import {
  removeFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorage";

export const NavbarPro = ({ headerData }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  /* AUTH */
  const { data: session } = useSession();
  if (session?.user) {
    saveToLocalStorage("user-info", session?.user?.email);
  }
  const [user, loading, error] = useAuthState(auth);
  // console.log(user, session?.user);
  const logout = () => {
    signOutFireBase(auth);
    removeFromLocalStorage("user-info");
  };

  return (
    <header className="py-1 border shadow">
      <div className="container xl:max-w-[80vw] mx-auto px-5 sm:px-0">
        <div className="grid grid-cols-12">
          <div className="col-span-3 flex items-center justify-start">
            <Link href={`/`} className="text-xl bold">
              DREAM-BUILD
            </Link>
          </div>
          <nav className="hidden xl:block col-span-9 font-work">
            <ul className=" w-full flex items-center justify-end gap-8">
              {headerData.map((item, index) => (
                <li
                  tabIndex={index}
                  key={index}
                  className={"block group relative"}
                >
                  {item.subMenu ? (
                    <span className="text-base flex cursor-pointer gap-1 items-center text-base-content/80 hover:text-primary bg-transparent py-3 px-0 transition hover:duration-300 font-work">
                      {item.name}
                      {item.subMenu && (
                        <svg
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      )}
                    </span>
                  ) : (
                    <Link
                      href={item.link}
                      className="text-base flex gap-1 items-center text-base-content/80 hover:text-[#2b6777] bg-white py-3 px-0 transition hover:duration-300 font-work"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.subMenu && item.subMenu.length > 0 && (
                    <SubMenu subMenu={item.subMenu} />
                  )}
                </li>
              ))}
              <li>
                <Link href="/cart">
                  <div className="w-full rounded-full flex justify-center items-start cursor-pointer relative">
                    <BsCart className="text-[15px] md:text-[20px]" />
                    {cartItems.length > 0 && (
                      <div className="h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-[-5px] left-3 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                        {cartItems.length}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <div className="w-full rounded-full flex justify-center items-start cursor-pointer relative">
                    <FiHeart className="text-[15px] md:text-[20px]" />
                    {cartItems.length > 0 && (
                      <div className="h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-[-5px] left-3 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                        {cartItems.length}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
              {session?.user ? (
                <Button
                  onClick={() => signOut()}
                  className="bg-red-500 text-[#fff] hover:bg-[#2b6777]"
                >
                  Sign Out
                </Button>
              ) : user?.email ? (
                <Button
                  onClick={() => logout()}
                  className="bg-red-500 text-[#fff] hover:bg-[#2b6777]"
                >
                  Sign Out
                </Button>
              ) : (
                <Link href={"/login"} className="hover:text-[#fff]">
                  <button
                    type="dashed"
                    className="bg-[#52ab98] text-[#fff] hover:bg-[#2b6777] px-2 py-1 transition-transform active:scale-95 hover:opacity-75 rounded shadow"
                  >
                    Sign In
                  </button>
                </Link>
              )}
            </ul>
          </nav>

          {/* Responsive Sidebar Menu */}
          <div className="flex items-center justify-end gap-6 col-span-9 xl:col-span-3">
            <svg
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="cursor-pointer w-8 h-8 xl:hidden text-base-content"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Responsive Sidebar Layout */}
        <MobileNav
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          headerData={headerData}
          cartItems={cartItems}
          session={session}
          user={user}
          logout={logout}
        />
      </div>
    </header>
  );
};

const SubMenu = ({ subMenu }) => {
  return (
    <ul className="p-0 w-full min-w-[180px] max-w-[230px] invisible group-hover:visible absolute bg-white shadow-md bg-base-100 rounded-lg z-30 font-work ">
      {subMenu.map((subItem, index) => (
        <li key={index}>
          <Link
            href={subItem.link}
            className="text-sm text-base-content/80 hover:text-[#2b6777] transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block"
          >
            {subItem.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
