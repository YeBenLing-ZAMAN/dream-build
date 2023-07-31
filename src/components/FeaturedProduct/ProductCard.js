import Image from "next/image";
import Link from "next/link";
import Rating from "../Rating/Rating";

export default function ProductCard({ product }) {
  // console.log(product)
  const { _id, image, productName, category, price, status, averageRating } =
    product;
  return (
    <div className="relative shadow-md hover:shadow-2xl p-2 transition delay-100 duration-300">
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
        <p className="text-xl font-semibold pl-2 py-2">{productName}</p>
        <div>
          <div className="text-lg pl-2 grid gap-y-1">
            <p className="shadow-sm text-[#2b6777] bg-[#f2f2f2]  font-semibold">
              {category}
            </p>
            <p className="shadow-sm text-red-500 font-semibold">${price}</p>
            <Rating value={averageRating}></Rating>
          </div>
        </div>
      </Link>
    </div>
  );
}
