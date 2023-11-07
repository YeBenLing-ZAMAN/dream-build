import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../FeaturedProduct/ProductCard";

const RelatedProducts = ({ relatedProducts }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
    },
    lgMobile: {
      breakpoint: { max: 910, min: 550 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 549, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        swipeable={true}
        draggable={true}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {relatedProducts.length > 0 &&
          relatedProducts?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
