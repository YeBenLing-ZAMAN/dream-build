import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";

const ProductImageCarousel = ({ images }) => {
  const imagesTwo = [
    "https://images.unsplash.com/photo-1600003263720-95b45a4035d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://plus.unsplash.com/premium_photo-1669814666190-736a7a87fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80",
    "https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
  ];
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={true}
        thumbWidth={80}
        className="productCarousel"
      >
        {imagesTwo?.map((img, i) => (
          <img
            key={i}
            className="w-full h-full mx-auto object-cover object-center"
            src={img}
            alt={"img"}
          />
        ))}
        {/* {imagesTwo?.map((img, i) => (
          <Image key={i} src={img} className="object-cover object-center w-full h-full block" alt="image" width={500} height={500} />
        ))} */}
      </Carousel>
    </div>
  );
};

export default ProductImageCarousel;
