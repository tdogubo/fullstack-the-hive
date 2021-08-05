import Image from "next/image";
import about_1 from "../assets/about_1.png";
import about_2 from "../assets/about_3.jpeg";

export default function About() {
  return (
    <div className="h-screen bg-gradient-r from-pink-300 to-yellow-500">
      <h1 className="pt-16 article-header">About Me</h1>
      <div>
        <section className="flex">
          <Image
            src={about_1}
            alt="about me"
            width="120px"
            height="150px"
          ></Image>
        </section>
        <p>This is will be about your product</p>
        <section className=" flex bg-red-900">
          <div className="w-1/2">
            <p>This is will be about your product</p>
          </div>
          <div className="w-1/2">
            <Image
              src={about_2}
              alt="about me"
              width="300px"
              height="250px"
            ></Image>
          </div>
        </section>
      </div>
      <div>
        <section className="flex">
          <Image
            src={about_1}
            alt="about me"
            width="120px"
            height="150px"
          ></Image>
        </section>
        <p>This is will be about your product</p>
        <section className=" flex bg-red-900">
          <div className="w-1/2">
            <p>This is will be about your product</p>
          </div>
          <div className="w-1/2">
            <Image
              src={about_2}
              alt="about me"
              width="300px"
              height="250px"
            ></Image>
          </div>
        </section>
      </div>
      <div>
        <section className="flex">
          <Image
            src={about_1}
            alt="about me"
            width="120px"
            height="150px"
          ></Image>
        </section>
        <p>This is will be about your product</p>
        <section className=" flex bg-red-900">
          <div className="w-1/2">
            <p>This is will be about your product</p>
          </div>
          <div className="w-1/2">
            <Image
              src={about_2}
              alt="about me"
              width="300px"
              height="250px"
            ></Image>
          </div>
        </section>
      </div>
    </div>
  );
}
