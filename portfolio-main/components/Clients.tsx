import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20 px-10" id="testimonials">
      <h1 className="heading text-white">
        Kinds words from
        <span className="text-purple"> colleagues</span>
      </h1>
      <div className="flex flex-col items-center ">
        <div className="h-[50vh]  rounded-md flex flex-col antialiased items-baseline relative overflow-hidden">
          {" "}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
