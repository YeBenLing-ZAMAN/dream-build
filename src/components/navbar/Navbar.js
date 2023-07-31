import Link from "next/link";
import DropdownButton from "./DropdownButton";
import { Button } from "antd";
import { useSession, signOut } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth.js";
import { signOut as signOutFireBase } from "firebase/auth";

export default function Navbar() {
  const { data: session } = useSession();

  const [user, loading, error] = useAuthState(auth);
  console.log(user, session);
  const logout = () => {
    signOutFireBase(auth);
  };

  return (
    <div className="border bg-white p-4 flex justify-around">
      <div className="flex justify-center">
        <Link href={"/"} className="text-black hover:text-[#2b6777]">
          DREAM-BUILD
        </Link>
      </div>
      <nav className="text-gray-900 flex justify-center gap-x-6 text-md">
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
