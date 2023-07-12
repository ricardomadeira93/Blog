import React from "react";

const Article = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-5 mb-8">
        <div className="">
          <img src="/public/Article1.jpg" alt="Article Image" className="" />
        </div>
        <div className="">
          <h2 className="font-bold text-3xl mb-4 ">
            Title of Article grgergergggggg
          </h2>

          <p className="border-b-2 border-black" />

          <div className="text-[12px] font-bold mt-1 mb-0">
            <p className="text-black">By: Ricardo Madeira</p>
            <time>2023-07-12 14:37</time>
          </div>

          <p className="text-md mt-3 leading-5">
            Description of Article gerge rughuerh giu erhgierhg iuhreugh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
