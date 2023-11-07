import Image from "next/image";
import Link from "next/link";
import Rating from "../Rating/Rating";

export default function ProductCard({ product }) {
  // console.log(product)
  const { _id, image, productName, category, price, status, averageRating } =
    product;
  return (
    <div className="my-5 w-64 shadow-md hover:shadow-2xl p-2 transition delay-100 duration-300 relative">
      <Link href={`/products/${_id}`}>
        <div className="block h-48 rounded overflow-hidden">
          <Image
            className="object-cover object-center w-full h-full block"
            src={image}
            alt="product Image"
            width={250}
            height={200}
          ></Image>
        </div>
        <h3 className="text-gray-500 absolute top-2 left-2 p-1 backdrop-blur-xl text-stone-50 bg-red-500  text-xs tracking-widest title-font mb-1">
          #{status}
        </h3>
        <p className="text-xl font-semibold pl-2 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis capitalize max-w-[200px]">
          {productName}
        </p>
        <div>
          <div className="text-lg pl-2 grid gap-y-1">
            <p className="shadow-sm text-[#2b6777] bg-[#f2f2f2]  font-semibold">
              {category}
            </p>
            <p className="shadow-sm text-red-500 font-semibold">&#2547;{price}</p>
            <div className="flex gap-1 items-center justify-start">
              <Rating value={averageRating}></Rating>
              {/* <span className="d-block text-sm">({averageRating})</span> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
