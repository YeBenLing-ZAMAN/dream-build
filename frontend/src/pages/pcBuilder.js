import Image from "next/image";
import { BsCpu, BsMotherboard, BsFillDiagram3Fill } from "react-icons/bs";
import { GiPowerGenerator } from "react-icons/gi";
import { MdStorage, MdMonitor } from "react-icons/md";
import { useGetPcBuilderProductsQuery } from "@/redux/api/apiSlice";
import dynamic from "next/dynamic";
import RootLayout from "@/components/Layouts/RootLayouts";
import PcBuildingComponents from "@/components/PcBuildingComponents/PcBuildingComponents";

const categories = [
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

export default function PCBuilder() {
  const { data, isLoading } = useGetPcBuilderProductsQuery();
  const DynamicComponent = dynamic(
    () => import("@/components/PcBuildingComponents/PcBuildingComponents"),
    { ssr: false }
  );

  const handleComplete = () => {
    alert("Successfully Completed");
  };

  const totalCost = data?.data
    ?.map((item) => parseFloat(item.price))
    .reduce((acc, item) => acc + item, 0);

  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <div className="md:w-2/3 mx-auto my-12">
      <div className="flex flex-col md:flex-row justify-evenly md:justify-between items-center min-h-[100px] text-[#c8d9e4] bg-[#2b6777] text-white px-2 md:px-4">
        <div className="flex justify-center">
          <p>DREAM-BUILD</p>
        </div>
        <p className="md:text-2xl text-gray-300 pb-4 md:pb-0">
          Build Your Own Computer With{" "}
          <span className="text-[#52ab98]">DREAM-BUILD</span>
        </p>
      </div>
      <div className="min-h-screen">
        {categories?.map((product) => (
          <PcBuildingComponents
            key={product.name}
            selectedProducts={data?.data}
            product={product}
          ></PcBuildingComponents>
        ))}
        <div>
          <div className="text-[#c8d9e4] bg-[#2b6777] min-h-[100px] my-4 p-4 flex justify-between items-center">
            {data?.data?.length < 6 ? (
              <button
                className="px-2 md:px-4 border-4 py-2 md:text-xl cursor-not-allowed border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff]"
                disabled
              >
                Complete Build
              </button>
            ) : (
              <button
                className="px-2 md:px-4 border-4 py-2 md:text-xl cursor-pointer border-[#52ab98] text-[#52ab98] hover:bg-[#52ab98] hover:text-[#fff]"
                onClick={() => handleComplete()}
              >
                Complete Build
              </button>
            )}
            <p className="text-lg text-[#52ab98] md:text-2xl">
              Total Cost:{" "}
              <span className="font-semibold text-[#fff]">${totalCost}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
