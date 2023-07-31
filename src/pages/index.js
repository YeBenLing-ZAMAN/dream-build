import Banner from "@/components/Banner";
import RootLayout from "@/components/Layouts/RootLayouts";
import { Calendar } from "antd";

export default function Home() {
  return (
    <div className="max-w-[80vw] mx-auto">
      <Banner />;<h1>home page</h1>;
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
