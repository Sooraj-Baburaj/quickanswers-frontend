import React from "react";
import Links from "../ui/Links";
import Icon from "../ui/Icon";

const CategoryTab = () => {
  return (
    <div className="w-full flex  space-x-lg">
      <ul className="w-auto space-x-md flex">
        <li>
          <button className="whitespace-pre bg-primary text-white px-lg py-sm rounded-2xl border border-primary">
            All
          </button>
        </li>
        <li>
          <button className="whitespace-pre bg-transparent text-primary px-lg py-sm rounded-2xl border border-primary-border hover:bg-primary-border duration-300 transition-all">
            Health & Wellness
          </button>
        </li>
        <li>
          <button className="whitespace-pre bg-transparent text-primary px-lg py-sm rounded-2xl border border-primary-border hover:bg-primary-border duration-300 transition-all">
            Nutrition
          </button>
        </li>
      </ul>
      <Links
        className="whitespace-pre text-md space-x-md mt-md opacity-65 hover:opacity-100 duration-300"
        href="/answers/1"
      >
        <span>Explore more categories</span>
        <span>
          <Icon icon="arrows" size={10} color="#000" />
        </span>
      </Links>
    </div>
  );
};

export default CategoryTab;
