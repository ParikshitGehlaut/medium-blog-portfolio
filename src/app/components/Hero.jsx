import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I am "Your Name",
            <br className="hidden lg:inline-block" />I am passionate Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa
            magnam necessitatibus nam omnis quos repudiandae esse temporibus
            perspiciatis odio ex possimus debitis odit, corporis, hic dolorum?
            Similique, cupiditate.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Visit Github
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/a5.jpg"
            height={500}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
