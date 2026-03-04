"use client";

import { FcCellPhone } from "react-icons/fc";
import { FaMessage } from "react-icons/fa6";
import { AiFillApi } from "react-icons/ai";
import { BsDatabaseFill } from "react-icons/bs";

const iconMap = {
  BsDatabaseFill,
  AiFillApi,
  FaMessage,
  FcCellPhone,
};

export function ServiceCard({ icon, title, description }) {
  const Icon = iconMap[icon];

  return (
    <div className="flex flex-col items-center text-center hover:shadow-xl transition-shadow">
      <div className="mb-4 flex">
        {Icon && <Icon size={32} className="text-ring" />}
      </div>
      <h3 className={`text-md md:text-md font-bold mb-3 text-ring`}>{title}</h3>
      <p className={`text-sm md:text-sm mb-6 leading-relaxed text-ring`}>
        {description}
      </p>
    </div>
  );
}
