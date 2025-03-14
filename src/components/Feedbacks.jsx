import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  eduationalclass,
  name,
  icon,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <img
          src={icon}
          alt={`feedback_by-${name}`}
          className='w-16 h-16 p-2 bg-white rounded-full object-cover'
        />

    <div className='mt-1'>
      <p className='text-white tracking-wider font-black text-[32px]'>{eduationalclass}</p>
      <div className='mt-7 flex justify-between items-center gap-4'>
      <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full'
        />
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
          {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
           {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Educational</p>
          <h2 className={styles.sectionHeadText}>Qualification.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
