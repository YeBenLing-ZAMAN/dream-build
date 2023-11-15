import { navbarData } from "../../../data/navbarData";
import Footer from "../Footer/Footer";
import TopLoader from "../Loader/NextTopLoader";
import { NavbarPro } from "../navbar/NavbarPro";

export default function RootLayout({ children }) {

  return (
    <div>
      <TopLoader />
      <NavbarPro headerData={navbarData} />
      {children}
      <Footer></Footer>
    </div>
  );
}
