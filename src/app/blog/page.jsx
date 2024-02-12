import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className=" object-cover object-center"
                src="/a3.jpg"
                alt="blog"
                height={720}
                width={500}
                priority
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className=" object-cover object-center"
                src="/a2.jpg"
                alt="blog"
                height={720}
                width={500}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The 400 Blows
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className=" object-cover object-center"
                src="/a1.jpg"
                alt="blog"
                height={720}
                width={500}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
