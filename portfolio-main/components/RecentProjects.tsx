"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20 px-20" id="projects">
      <h1 className="heading text-white">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="w-[90vw] rounded-lg overflow-hidden border-white shadow-lg bg-indigo-950 hover:shadow-2xl transition-shadow duration-300"
            key={item.id}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-200">
                {item.name}
              </div>
              <p className="text-white text-base">{item.des}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="flex flex-row gap-2 rounded-full  text-sm font-semibold text-gray-700">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </span>
            </div>
            <div className="px-6 py-4 flex justify-between">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Live Demo
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
