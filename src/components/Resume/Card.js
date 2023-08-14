import React from "react";

const Card = ({ level, board, year, institute }) => {
  return (
    <div className="flex items-center group">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span
          className="absolute w-5 h-5 rounded-full bg-gray-400 flex justify-center items-center bg-opacity-60
                -top-2 -left-3"
        >
          <span className="w-3 h-3 rounded-full inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full px-10 flex items-center justify-between bg-gray-900 p-10 group-hover:scale-[1.025] group-duration-300">
        <div className="flex flex-col gap-2 group-hover:text-white ">
          <div className="  font-semibold">
            <span className="text-lg">{level}</span>
          </div>
          <div className="">
            <span className="text-sm">{board}</span>
          </div>
          <div>
            <span className="text-base">{institute}</span>
          </div>
          <div className="mt-3 md:max-2xl:hidden">
            <span className="font-bold text-white bg-designColor bg-opacity-70 p-2 bg-gray-900 rounded-lg">
              {year}
            </span>
          </div>
        </div>
        <div className="min-[100px]:max-md:hidden">
          <span className="font-bold text-white bg-designColor bg-opacity-70 p-2 bg-gray-900 rounded-lg">
            {year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
