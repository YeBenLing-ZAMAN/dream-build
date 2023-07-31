import Banner from "@/components/Banner";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import RootLayout from "@/components/Layouts/RootLayouts";

export default function Home({ randomProducts }) {
  return (
    <div className="md:max-w-[80vw] mx-auto">
      <Banner />
      <FeaturedProduct randomProducts={randomProducts}></FeaturedProduct>
    </div>
  );
}

function getRandomItemsFromArray(arr, numberOfItems) {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfItems);
}

export const getStaticProps = async () => {
  const url = "http://pc-builder-backend-g8wx.onrender.com/products";
  const res = await fetch(url);
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
