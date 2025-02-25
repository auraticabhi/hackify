import React from "react";
interface TabProps {
    tab1: string;
    tab2: string;
    selectedTab: string;
    handleTabClick: (tab: TabProps["tab1"] | TabProps["tab2"]) => void; // Restricts tab choice
  }
  
const Tab = ({
    selectedTab,handleTabClick,tab1,tab2
}:TabProps) => {
  return (
    <div className="flex mb-4 p-2 border-2 w-fit rounded-xl ">
      <button
        onClick={() => handleTabClick(tab1)}
        className={`py-2 rounded-l-lg  px-6 text-lg font-semibold  ${
          selectedTab === tab1
            ? "bg-gradient-to-r from-indigo-400 to-purple-500  text-white"
            : "bg-zinc-800 text-gray-400"
        } transition-colors duration-300`}
      >
        {tab1}
      </button>
      <button
        onClick={() => handleTabClick(tab2)}
        className={`py-2 rounded-r-lg px-6 text-lg font-semibold d ${
          selectedTab === tab2
            ? "bg-gradient-to-r from-indigo-400 to-purple-500  text-white"
            : "bg-zinc-800 text-gray-400"
        } transition-colors duration-300`}
      >
        {tab2}
      </button>
    </div>
  );
};

export default Tab;
