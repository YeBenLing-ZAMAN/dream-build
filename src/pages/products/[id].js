import RootLayout from "@/components/Layouts/RootLayouts";
import Wrapper from "@/components/wrapper";
import StarRatings from "react-star-ratings";
import { IoMdHeartEmpty } from "react-icons/io";
import { Avatar, Space } from "antd";
import { env } from "@/env";
import { usePostProductInPcBuilderMutation } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";
import Comment from "@/components/Comment";
import ProductImageCarousel from "@/components/Carousel/ProductImageCarousel";
import {
  getDiscountedPricePercentage,
  getRandomItemsFromArray,
} from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import TopRateProducts from "@/components/RelatedProducts/TopRateProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/api/cartSlice";

export default function ProductDetails({ product, relatedProducts }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [postProduct, { isLoading }] = usePostProductInPcBuilderMutation();
  // console.log(product);
  const handleProduct = (product) => {
    postProduct(product);

    alert("Successfully added product");
    router.push("/pcBuilder");
  };

  console.log(product);

  const {
    averageRating,
    brand,
    category,
    image,
    model,
    price,
    originalPrice = 300,
    productName,
    reviews,
    status,
    comment,
    description,
  } = product[0];

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="md:max-w-[80vw] mx-auto min-h-[80vh]">
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductImageCarousel images={image} />
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-2xl font-semibold mt-6 md:mt-0">
                {productName}
              </h1>
              <p className="text-xl mt-2">{description}</p>
              <div className="md:flex grid gap-y-4 md:gap-3 mt-4 text-lg">
                <p
                  className={`text-left font-semibold text-[#52ab98] rounded ${
                    status === "In Stock" ? "text-[#52ab98]" : "text-[#ff595e]"
                  }`}
                >
                  {status}
                </p>
              </div>
              <div className="flex items-center mt-4 ">
                <p className="mr-2 text-lg font-semibold">
                  MRP : &#2547;{price}
                </p>
                {originalPrice && (
                  <>
                    <p className="text-base font-medium line-through">
                      &#2547;{originalPrice}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      {getDiscountedPricePercentage(originalPrice, price)}% off
                    </p>
                  </>
                )}
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
              <div className="w-full mt-5 flex gap-5">
                <button
                  className="w-full px-6 font-semibold p-2 text-lg bg-[#52ab98] text-[#fff] hover:bg-[#40a28d] hover:text-[#fff] transition-transform active:scale-95 hover:opacity-75 rounded shadow"
                  onClick={() => {
                    dispatch(
                      addToCart({
                        ...product[0],
                        oneQuantityPrice: price,
                      })
                    );
                  }}
                >
                  Add To Cart
                </button>
                <button
                  className="w-fit border-2 px-4 font-semibold p-2 text-lg border-[#ff595e] text-[#ff595e] hover:bg-[#ff595e] hover:text-[#fff] transition-transform active:scale-95 rounded shadow"
                  onClick={() => alert("add to wish")}
                >
                  <IoMdHeartEmpty size={24} />
                </button>
              </div>
              <div className="w-full mt-5">
                <button
                  className="w-full border-2 px-6 font-semibold p-2 text-lg border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff] transition-transform active:scale-95 hover:opacity-75 rounded shadow"
                  onClick={() => handleProduct(product)}
                >
                  Add To Builder Pc
                </button>
              </div>
              <div>
                <div className="mt-10 text-xl font-bold mb-5">
                  Product Details
                </div>
                <div className="markdown text-lg mb-5">
                  <ReactMarkdown>{description}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          <div>
            <RelatedProducts relatedProducts={relatedProducts} />
          </div>
          <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0 flex flex-col-reverse md:flex-row gap-10">
            <div className="flex-1">
              {comment?.map((d, index) => (
                <Comment key={index} comment={d}></Comment>
              ))}
            </div>
            <TopRateProducts topRatedProducts={relatedProducts} />
          </div>
        </div>
      </Wrapper>
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

  const resRelatedProducts = await fetch(`${env.BASE_URL}/products`);
  const data = await resRelatedProducts.json();
  const relatedProducts = getRandomItemsFromArray(data, 8);
  // console.log(relatedProducts);
  return {
    props: {
      product,
      relatedProducts,
    },
  };
};
