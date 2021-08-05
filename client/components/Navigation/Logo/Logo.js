import Image from "next/image";
import hiveLogo from "./logo.png";

const Logo = () => {
  return (
    <div className="logo h-16 w-32 pt-2 flex items-center">
      <Image src={hiveLogo} alt="hiveLogo" />
    </div>
  );
};

export default Logo;
