import RootLayout from "@/components/Layouts/RootLayouts";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import { Avatar, Space } from "antd";
import { env } from "@/env";
import { usePostProductInPcBuilderMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import Comment from "@/components/Comment";

export default function ProductDetails({ product }) {
  const router = useRouter();
  const [postProduct, { isLoading }] = usePostProductInPcBuilderMutation();
  // console.log(product);
  const handleProduct = (product) => {
    postProduct(product);

    alert("Successfully added product");
    router.push("/pcBuilder");
  };

  const {
    averageRating,
    brand,
    category,
    description,
    image,
    model,
    price,
    productName,
    reviews,
    status,
    comment,
  } = product[0];

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="md:max-w-[80vw] mx-auto min-h-[80vh]">
      <div className="md:flex m-4 md:m-16 gap-y-2 md:gap-x-4">
        <div className="w-full md:w-1/2 border-[2px] border-[#52ab98]">
          <Image
            src={image}
            className="object-cover object-center w-full h-full block"
            alt="image"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mt-6 md:mt-0">{productName}</h1>
          <p className="text-xl mt-2">{description}</p>
          <div className="md:flex grid gap-y-4 md:gap-3 mt-4 text-lg">
            <p className="py-2 border md:w-1/3 bg-[#52ab98] text-[#fff] text-center font-semibold rounded">
              Price: ${price}
            </p>
            <p className="py-2 border md:w-1/3 text-center bg-gray-100 font-semibold text-[#52ab98] rounded">
              {status}
            </p>
          </div>
          <div className="mt-4 grid text-lg">
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Total Reviews: {reviews}</p>
            <div className="flex gap-3">
              <span>Individual rating:</span>
              <StarRatings
                starDimension="20px"
                rating={averageRating}
                starRatedColor="#f9b115"
                starSpacing="1px"
                numberOfStars={5}
                name="rating"
              />
              <span className="text-gray-900">({averageRating})</span>
            </div>
            <div className="flex gap-x-2">
              <p>Your rating:</p>
              <StarRatings
                starDimension="20px"
                rating={averageRating}
                starRatedColor="#f9b115"
                starSpacing="1px"
                numberOfStars={5}
                name="rating"
              />{" "}
              <span className="text-gray-900">({averageRating})</span>
            </div>
          </div>
          <div className="w-full mt-5">
            <button
              className="w-full border-4 px-6 font-semibold text-lg border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff]"
              onClick={() => handleProduct(product)}
            >
              Add To Builder
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 m-4 mb-16">
        {comment?.map((d, index) => (
          <Comment key={index} comment={d}></Comment>
        ))}
      </div>
    </div>
  );
}

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${env.BASE_URL}/products`);
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${env.BASE_URL}/products/${params.id}`);
  const product = await res.json();
  // console.log(product);

  return {
    props: {
      product,
    },
  };
};
