import { updateCart, removeFromCart } from "@/redux/api/cartSlice";
import { fixedFloatValue } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
const CartItemCard = ({ data }) => {
  const {
    _id,
    brand,
    category,
    image,
    model,
    price,
    quantity,
    oneQuantityPrice,
    productName,
  } = data;

  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      _id: data._id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <Link
        href={`/products/${_id}`}
        className="shrink-0 aspect-square w-[50px] md:w-[120px]"
      >
        <Image src={image} alt={model} width={120} height={120} />
      </Link>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT NAME */}
          <Link
            href={`/products/${_id}`}
            className="text-lg md:text-2xl font-semibold text-black/[0.8]"
          >
            {productName}
          </Link>

          {/* PRODUCT CATEGORY, BRAND, UNIT PRICE FOR LARGE DISPLAY */}
          <div className="flex gap-3">
            <div className="text-sm md:text-md font-medium text-black/[0.6] block md:hidden">
              {category}
            </div>
            <div className="text-sm md:text-md font-medium text-black/[0.6] block md:hidden">
              {brand}
            </div>
            <div className="text-md font-medium text-green-700 block md:hidden">
              Unit Price: &#2547;{fixedFloatValue(oneQuantityPrice)}
            </div>
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black mt-2">
            MRP : &#2547;{fixedFloatValue(price)}
          </div>
        </div>

        {/* PRODUCT CATEGORY, BRAND, UNIT PRICE FOR SMALL DISPLAY */}
        <div className="flex gap-3">
          <div className="text-md font-medium text-black/[0.6] hidden md:block">
            {category}
          </div>
          <div className="text-md font-medium text-black/[0.6] hidden md:block">
            {brand}
          </div>
          <div className="text-md font-medium text-green-700 hidden md:block">
            Unit Price: &#2547;{oneQuantityPrice}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ _id: data._id }))}
            className="cursor-pointer text-black/[0.8] hover:text-red-500 text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
