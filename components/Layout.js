import Navbar from "./Navbar";
import Footer from "./Footer";
import GoogleApiWrapper from "./Map";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <GoogleApiWrapper />
      <Footer />
    </>
  );
};

export default Layout;
