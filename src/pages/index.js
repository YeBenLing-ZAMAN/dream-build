import RootLayout from "@/components/Layouts/RootLayouts";

export default function Home() {
  return <h1>home page</h1>;
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
