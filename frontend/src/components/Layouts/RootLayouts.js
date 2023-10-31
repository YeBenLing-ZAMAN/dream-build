import Footer from "../Footer/Footer";
import TopLoader from "../Loader/NextTopLoader";
import Navbar from "../navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <TopLoader />
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
