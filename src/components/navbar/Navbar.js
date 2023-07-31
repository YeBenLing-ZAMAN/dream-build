import Link from "next/link";
import DropdownButton from "./DropdownButton";
import { Button } from "antd";

export default function Navbar() {
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
        {false ? (
          <button className="hover:text-[#2b6777]">Sign Out</button>
        ) : (
          <Link href={"/signup"} className="hover:text-[#fff]">
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
