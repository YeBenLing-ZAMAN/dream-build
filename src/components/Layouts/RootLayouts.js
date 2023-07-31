import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
