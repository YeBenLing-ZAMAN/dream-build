import RootLayout from "@/components/Layouts/RootLayouts";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>





        {/* when there are no items in cart */}
        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            alt="image"
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-3xl font-bold">Your cart is empty</span>
          <span className="text-center text-xl mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8 bg-[#2b6777] rounded shadow text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

Cart.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  
