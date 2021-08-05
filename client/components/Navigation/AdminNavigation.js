import Logo from "./Logo/Logo";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Link from "next/link";

const AdminNavigation = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full">
        <nav className="bg-blue-900 flex justify-between items-center h-16 shadow-md">
          <div>
            <Logo />
          </div>
          <div>
            <Link href="/">
              <a>
                <h1 className="header lg:text-2xl ml-44 md:text-xl sm:text-sm text-xs text-white hover:text-indigo-500">
                  THE HIVE
                </h1>
              </a>
            </Link>
          </div>
          <div className="px-2.5 flex flex-wrap content-center">
            <div className=" font-serif space-x-4">
              <Link href="/">
                <a className="text-white">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-white">About</a>
              </Link>
              <Contact />
              <Cart />
            </div>
          </div>
        </nav>
    </div>
  );
};

export default AdminNavigation;
