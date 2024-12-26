import React from "react";

import { skillsnames } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, name}) => (
  <div  key={index} className="rounded bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500 p-[2px]">
    <div className="flex rounded items-center justify-center bg-gray-800 ">
      <div className="text-white px-4 py-2"> {name}</div>
    </div>
  </div>
  // <div key={index} className="bg-sky-500/[.06] border border-bg-sky-500 rounded px-4 py-2">
  //   {name}
  // </div>
);

const About = () => {
  return (
    <>
      <div className='flex flex-wrap xs:bottom-10 bottom-32 w-full flex justify-center items-center gap-3'>
        {skillsnames.map((name, index) => (
          <ServiceCard key={name.name} name={name.name} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
