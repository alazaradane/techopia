import React from "react";
import DemoPage from "./admins/page";

const Admins = () => {
  return (
    <main>
      <div className=" text-left ml-9">
        <span className="text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          Admins
        </span>
      </div>
      <div className=" mt-[-2rem]">
        <DemoPage />
      </div>
    </main>
  );
};

export default Admins;
