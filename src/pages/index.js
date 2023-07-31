import Banner from "@/components/Banner";
import FeaturedCategory from "@/components/FeaturedCategory/FeaturedCategory";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import RootLayout from "@/components/Layouts/RootLayouts";
import { env } from "@/env";

export default function Home({ randomProducts }) {
  return (
    <div className="md:max-w-[80vw] mx-auto">
      <Banner />
      <FeaturedProduct randomProducts={randomProducts}></FeaturedProduct>
      <FeaturedCategory />
    </div>
  );
}

function getRandomItemsFromArray(arr, numberOfItems) {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfItems);
}

export const getStaticProps = async () => {
  const res = await fetch(`${env.BASE_URL}/products`);
  const data = await res.json();
  const randomProducts = getRandomItemsFromArray(data, 8);
  return {
    props: {
      randomProducts,
    },
  };
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
