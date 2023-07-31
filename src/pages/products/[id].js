import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>this is product details page:{router.query.id}</h1>
    </div>
  );
};

export default ProductDetails;
