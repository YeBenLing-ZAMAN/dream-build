import Link from "next/link";
import { BsCpu, BsMotherboard, BsFillDiagram3Fill } from "react-icons/bs";
import { GiGreenPower } from "react-icons/gi";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdStorage, MdMonitor } from "react-icons/md";

export default function FeaturedCategory() {
  const category = [
    {
      name: "CPU",
      icon: <BsCpu></BsCpu>,
    },
    {
      name: "RAM",
      icon: <CgSmartphoneRam></CgSmartphoneRam>,
    },
    {
      name: "Mother Board",
      icon: <BsMotherboard></BsMotherboard>,
    },
    {
      name: "Storage Device",
      icon: <MdStorage></MdStorage>,
    },
    {
      name: "Power supply Unit",
      icon: <GiGreenPower></GiGreenPower>,
    },
    {
      name: "Monitor",
      icon: <MdMonitor></MdMonitor>,
    },
  ];

  return (
    <div>
      <h1 className="text-center text-4xl my-8 md:mb-2 font-semibold">
        Featured <span className="text-[#52ab98]">Category</span>
      </h1>
      <p className="text-center text-xl mb-10">
        Check & Get Your Desired Products catagories!
      </p>
      <div className="grid md:grid-cols-6 gap-2 md:gap-6 m-6 md:m-12 ">
        {category.map((item, index) => {
          return (
            <Link
              key={item.name}
              href={`/products?category=${item.name}`}
              className="border border-[#c8d9e4] rounded-md shadow-md grid justify-center p-10 hover:text-[#52ab98] transition delay-150 duration-300"
            >
              <p className=" text-7xl flex justify-center pb-2 ">{item.icon}</p>
              <p className="text-xl text-center font-semibold">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
