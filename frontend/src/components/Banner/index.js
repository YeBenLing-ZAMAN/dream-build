import React from "react";
import Image from "next/image";
import BannerCarousel from "./BannerCarousel";
import Banner_01 from "@/assets/images/banner-images/Banner-01.jpg";
import Banner_02 from "@/assets/images/banner-images/Banner-02.jpg";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="md:flex gap-4 p-4">
      <div className="md:w-3/4">
        <BannerCarousel></BannerCarousel>
      </div>
      <div className="grid items-stretch">
        <Link
          href={"/pcBuilder"}
          className=" flex items-center border shadow-lg my-2 md:my-0"
        >
          <Image
            src={Banner_01}
            alt="Banner_01"
            width={400}
            height={400}
          ></Image>
        </Link>
        <Link
          href={"/pcBuilder"}
          className=" flex items-center border mt-2 shadow-lg"
        >
          <Image
            src={Banner_02}
            alt="Banner_02"
            width={400}
            height={400}
          ></Image>
        </Link>
      </div>
    </div>
  );
}
