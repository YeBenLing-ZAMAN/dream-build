import Link from "next/link";
import { BsCpu, BsMotherboard, BsFillDiagram3Fill } from "react-icons/bs";
import { GiPowerGenerator } from "react-icons/gi";
import { MdStorage, MdMonitor } from "react-icons/md";

export default function FeaturedCategory() {
  const category = [
    {
      name: "CPU",
      icon: <BsCpu></BsCpu>,
    },
    {
      name: "Mother Board",
      icon: <BsMotherboard></BsMotherboard>,
    },
    {
      name: "RAM",
      icon: <BsFillDiagram3Fill></BsFillDiagram3Fill>,
    },
    {
      name: "Power supply Unit",
      icon: <GiPowerGenerator></GiPowerGenerator>,
    },
    {
      name: "Storage Device",
      icon: <MdStorage></MdStorage>,
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
      <div className="grid md:grid-cols-6 gap-2 md:gap-6 m-6 md:m-12 ">
        {category.map((item) => {
          return (
            <Link
              href={`/products?category=${item.name}`}
              className="border rounded-md shadow-md grid justify-center p-10 hover:text-[#52ab98] transition delay-150 duration-300"
              key={item.name}
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
