import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import { Button } from "antd";
import {useRouter} from "next/router";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const onSave = () => {
  
}


const NewArticle = (props) => {
  const router = useRouter();
  return (
    <div className="w-full h-full">
      <section className="">
        <SunEditor
          width="100%"
          height="100%"
          lang="en"
          placeholder="Begin your creativity!!"
          setOptions={{
            minHeight: 500,
            maxHeight: 500,
            buttonList: [
              ["undo", "redo", "font", "fontSize", "formatBlock"],
              [
                "blockquote",
                "bold",
                "underline",
                "italic",
                "strike",
                "paragraphStyle",
                "align",
              ],
              ["subscript", "superscript"],
              ["fontColor", "outdent", "indent"],
              ["list", "table"],
              ["hiliteColor", "horizontalRule", "lineHeight"],
              ["video", "image", "link"],
              ["removeFormat", "preview"],["save"]
            ],
          }}
        />
      </section>
      <div className="flex justify-end items-center pt-3">
        <Button danger className="mr-6" onClick={() =>router.push('/admin')}>Cancel</Button>
        <Button type="primary">Submit</Button>
      </div>
    </div>
  );
};

export default NewArticle;
