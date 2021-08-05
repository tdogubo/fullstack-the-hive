import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  

  return (
    <div>
      <Navigation />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
