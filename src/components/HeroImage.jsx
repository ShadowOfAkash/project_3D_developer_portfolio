import React from "react";

const HeroImage = (props) => {
  return (
    <img
    src={props.image}
    alt={`feedback_by`}
    className='rounded-full object-cover h-[400px] w-[400px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'
  />
  );
};

export default HeroImage;
