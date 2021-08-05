import Link from "next/link";
import { Icon } from "semantic-ui-react";
const Footer = () => {
  return (
    <div className="border-t-2 md:border-t-4 border-gray-200 text-center">
      <footer>
        <div className="flex justify-end">
          <Link href="/">
            <a className=" pr-4 pt-2">
              <Icon  name="twitter" color="blue" direction="left"></Icon>Twitter
            </a>
          </Link>
          <Link href="/">
            <a className=" pr-4 pt-2 ">
              <Icon name="facebook square" color="blue" direction="left"></Icon>Facebook
            </a>
          </Link>
          <Link href="https://www.instagram.com/bonnetnui/">
            <a className=" pr-2 pt-2">
              <Icon name="instagram" color="pink" direction="left"></Icon>Instagram
            </a>
          </Link>
        </div>
        <h1 className="font-thin text-gray-300">©2021 THE_HIVE</h1>
      </footer>
    </div>
  );
};

export default Footer;
