import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePostProductInPcBuilderMutation } from "@/redux/api/apiSlice";
import StarRatings from "react-star-ratings";

export default function HorizontalProductCard({ product }) {
  const router = useRouter();
  const [postProduct] = usePostProductInPcBuilderMutation();

  const handleProduct = (product) => {
    postProduct(product);
    alert("Successfully added product");
    router.push("/pcBuilder");
  };

  const { _id, image, productName, category, price, status, averageRating } =
    product;
  return (
    <div className="border border-[#c8d9e4] min-h-[150px] px-2 my-3 md:px-0">
      <div className="flex gap-x-6 justify-evenly items-center min-h-[150px]">
        <Link href={`/products/${_id}`} className="text-8xl">
          <Image src={image} alt="logo" width={100} height={100}></Image>
        </Link>
        <div className="w-2/3">
          <Link
            href={`/products/${_id}`}
            className="text-lg md:text-2xl hover:underline"
          >
            {productName}
          </Link>
          <div className="pt-3">
            <div className="flex gap-x-6 justify-between items-center md:justify-normal">
              <p className="text-[#358022] font-semibold">{status}</p>
              <p className="">Rating: {averageRating}</p>
              <span className="hidden md:block">
                <StarRatings
                  starDimension="20px"
                  rating={averageRating}
                  starRatedColor="#f9b115"
                  starSpacing="1px"
                  numberOfStars={5}
                  name="rating"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3">
          <p className="md:border md:py-1 px-2 md:bg-gray-100 rounded-sm font-semibold">
            &#2547;{price}
          </p>
          <button
            className="border px-4 md:px-8 md:text-2xl py-2 border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff]"
            onClick={() => handleProduct(product)}
          >
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
}
