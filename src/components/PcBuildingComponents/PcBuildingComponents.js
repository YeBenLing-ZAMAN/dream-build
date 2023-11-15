import { GrCheckboxSelected } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

export default function PcBuildingComponents({ product, selectedProducts }) {
 
  let Items;

  if (selectedProducts?.length < 0) {
    return Loading;
  } else {
    Items = selectedProducts?.filter((SP) => SP?.category === product.name);
  }

  return (
    <div className="border min-h-[150px] px-2 md:px-0">
      <div className="flex gap-x-6 justify-evenly items-center min-h-[150px] py-3 md:py-0">
        <p className="text-8xl hidden md:block">{product.icon}</p>
        <div className="w-2/3">
          <p className="md:text-2xl">
            {product.name}{" "}
            <span className="bg-red-500 px-1 md:py-0.5 md:rounded text-xs text-white ">
              Required
            </span>
          </p>

          {Items?.length > 0 ? (
            <div className=" mt-4 bg-[#c8d9e4] min-h-50px border text-gray-900 rounded shadow">
              <div className="flex gap-x-6 justify-evenly items-center min-h-[80px]">
                <p className="text-8xl">
                  <Image
                    src={Items[0]?.image}
                    alt="logo"
                    width={100}
                    height={100}
                  ></Image>
                </p>
                <div className="w-2/3">
                  <div className="pt-1">
                    <div className="flex justify-between">
                      <p className="md:text-lg">{Items[0]?.productName}</p>
                      <p className="md:border md:py-1 px-2 md:bg-gray-100 rounded-sm font-semibold">
                        ${Items[0]?.price}
                      </p>
                    </div>
                    <div className="flex gap-x-6 justify-between md:justify-normal">
                      <p className="text-[#358022] font-semibold">
                        {Items[0]?.status}
                      </p>
                      <p className="">Rating: {Items[0]?.averageRating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" mt-4 min-h-50px border bg-gray-200 text-gray-200">
              ...
            </div>
          )}
        </div>

        {!Items?.length ? (
          <Link
            href={`/products?category=${product.name}`}
            className="px-4 md:px-8 md:text-2xl py-2 border border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff]"
          >
            Select
          </Link>
        ) : (
          <GrCheckboxSelected className="md:text-2xl text-[#43f9ff]"></GrCheckboxSelected>
        )}
      </div>
    </div>
  );
}
