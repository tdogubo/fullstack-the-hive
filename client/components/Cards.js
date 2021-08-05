import React from "react";
import ReactDOM from "react-dom";
import { Image } from "antd";

const Cards = () => {
  return (
    <div className="flex flex-wrap w-96 h-96 m-auto rounded-md px-2 md:w-72  hover:transform hover:scale-150 focus:transform focus:scale-150 mb-8 mr-8 shadow border-l-4 border-blue-300 hover:border-yellow-500 cursor-pointer">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        alt="poem"
        className="w-4/5"
        width="100%"
        height="100%"
        preview = {false}
      />
    </div>
  );
};

export default Cards;
