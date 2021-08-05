import React from "react";
import { Image } from "antd";

const Articles = () => {
  return (
    <div className="flex h-28 w-11/12 md:w-full border-4">
      <div className=" w-4/5 h-full pt-px px-px overflow-ellipsis overflow-hidden">
        <h1 className="pb-px text-2xl font-serif">Title</h1>
        <p className="flex items-center h-full text-justify pt-2 hover:underline hover:cursor-pointer">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum
          repellat enim minus at sit aut id rem cum commodi obcaecati,
          blanditiis inventore autem modi iure ducimus suscipit veritatis
          porro.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          dolorum repellat enim minus at sit aut id rem cum commodi obcaecati,
          blanditiis inventore autem modi iure ducimus suscipit veritatis porro.
        </p>
      </div>
      <div className="w-1/5 h-full">
        <Image
          src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          alt="arclicle image"
          width="100%"
          height="100%"
          preview={false}
        />
      </div>
    </div>
  );
};

export default Articles;
