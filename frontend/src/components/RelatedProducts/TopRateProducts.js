import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const TopRateProducts = ({ topRatedProducts }) => {
  return (
    <div className="min-h-[280px] h-fit border-1 rounded shadow-md p-2">
      <div className="text-2xl font-bold mb-5">Top Rated Products</div>
      {topRatedProducts.length > 0 ? (
        topRatedProducts?.slice(0, 5)?.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`}>
            <div className="mb-4 w-64 shadow-md hover:shadow-xl p-2 rounded transition overflow-hidden delay-100 duration-300 flex items-center gap-1">
              <figure className="flex-none w-16	h-[64px] rounded overflow-hidden">
                <Image
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                  alt="product Image"
                  width={100}
                  height={100}
                ></Image>
              </figure>
              <div className="p-2 flex flex-col flex-1">
                <p className="text-md font-semibold pl-2 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis capitalize max-w-[150px]">
                  {product.productName}
                </p>

                <div className="text-sm pl-2 grid gap-y-1">
                  <p className="text-[#2b6777] bg-[#f2f2f2]  font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis capitalize max-w-[150px]">
                    {product.category}
                  </p>
                  <p className="text-end text-red-500 font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis capitalize max-w-[150px]">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="mb-4 w-64 p-2 rounded transition overflow-hidden delay-100 duration-300 flex items-center gap-1">
          <p className="text-md font-semibold pl-2 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis capitalize max-w-[150px]">
            No product found
          </p>
        </div>
      )}
    </div>
  );
};

export default TopRateProducts;

/* 
          // <ProductCard key={product._id} product={product}></ProductCard>
*/
