import CartItemCard from "@/components/FeaturedProduct/CartItemCard";
import RootLayout from "@/components/Layouts/RootLayouts";
import Wrapper from "@/components/wrapper";
import { fixedFloatValue } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + parseFloat(val.price), 0);
  }, [cartItems]);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 ? (
          <>
            {/* HEADING for the cart page section */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Crafting Dreams, Empower Your Passion, Elevate Your Experience:
                Unleash the Power of Customization with Your PC Builder
              </div>
            </div>

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10 relative">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item) => (
                  <CartItemCard key={item.id} data={item} />
                ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY of all product */}
              <div className="flex-[1] h-fit sticky top-[50px]">
                <div className="text-lg font-bold">Summary</div>
                <div className="p-5 my-5 bg-black/[0.05] rounded shadow">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      &#2547;{fixedFloatValue(subTotal)}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                  <div className="w-full flex gap-2 items-center justify-start pointer-events-none">
                    <input
                      className="flex-1 px-2 py-1 rounded shadow"
                      placeholder="coupon code please"
                    ></input>
                    <button className="border-2 px-2 py-1 font-semibold text-xs tracking-wider border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff] transition-transform active:scale-95 hover:opacity-75 rounded shadow">
                      Apply Coupon
                    </button>
                  </div>
                </div>

                {/* BUTTON START */}
                <button
                  className="w-full px-6 font-semibold p-2 text-lg bg-[#000] text-[#fff] transition-transform active:scale-95 hover:opacity-85 rounded shadow"
                  // onClick={handlePayment}
                >
                  Checkout
                  {loading && <Image fill src="/spinner.svg" alt="loading" />}
                </button>

                {/* BUTTON END */}
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        ) : (
          <>
            {/* when there are no items in cart */}

            <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
              <Image
                src="/empty-cart.jpg"
                width={300}
                height={300}
                alt="cart empty image"
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
          </>
        )}
      </Wrapper>
    </div>
  );
}

Cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
