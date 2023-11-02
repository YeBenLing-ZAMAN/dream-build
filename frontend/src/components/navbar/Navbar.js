import Link from "next/link";
import DropdownButton from "./DropdownButton";
import { Button } from "antd";
import { useSession, signOut } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth.js";
import { signOut as signOutFireBase } from "firebase/auth";
import {
  removeFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorage";
import { useState } from "react";
import { BsCart } from "react-icons/bs";

export default function Navbar() {
  const { data: session } = useSession();
  if (session?.user) {
    saveToLocalStorage("user-info", session?.user?.email);
  }
  const [user, loading, error] = useAuthState(auth);
  console.log(user, session?.user);
  const logout = () => {
    signOutFireBase(auth);
    removeFromLocalStorage("user-info");
  };

  return (
    <div className="border bg-white p-4 flex justify-around">
      <div className="flex justify-center">
        <Link href={"/"} className="text-black hover:text-[#2b6777]">
          DREAM-BUILD
        </Link>
      </div>
      <nav className="text-gray-900 flex flex-wrap gap-y-4 justify-center gap-x-6 text-md">
        <Link href={"/"} className="hover:text-[#2b6777]">
          Home
        </Link>
        <p>|</p>
        <Link href={"/pcBuilder"} className="hover:text-[#2b6777]">
          Pc Builder
        </Link>
        <p>|</p>
        <DropdownButton></DropdownButton>
        <p>|</p>
        <Link href="/cart">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-start cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            {0 == 0 && (
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-[-5px] left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {0}
              </div>
            )}
          </div>
        </Link>
        <p>|</p>
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
            <Button
              type="dashed"
              className="bg-[#52ab98] text-[#fff] hover:bg-[#2b6777]"
            >
              Sign In
            </Button>
          </Link>
        )}
      </nav>
    </div>
  );
}
