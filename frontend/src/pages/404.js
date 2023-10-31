import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <section className="text-gray-600 body-font">
      <div className="m-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="lg:max-w-lg lg:w-3/5 md:w-1/2 w-5/6">
            <Image
              src="https://res.cloudinary.com/dpjht4etk/image/upload/v1689758182/not-found_oc6gvf.jpg"
              alt="page not found image"
              width={1200}
              height={600}
            />
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-red-500">
            PAGE NOT FOUND
          </h1>
          <div className="flex justify-center">
            <Link href="/">
              <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
