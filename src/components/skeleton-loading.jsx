import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="flex items-center justify-between shadow-md px-3 py-2 animate-pulse">
      <div className=" flex gap-x-2 items-center flex-1">
        <div className=" w-4 h-4 bg-slate-300 rounded-md"></div>
        <div className=" p-5 bg-slate-300 w-[70%] rounded-md"></div>
      </div>
      <div className=" p-5 rounded-md bg-slate-300"></div>
    </div>
  );
};

export default SkeletonLoading;
