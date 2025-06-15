"use client";

import React from "react";
import { motion } from "motion/react";
import { cubicBezier } from "motion";

const easing = cubicBezier(0.37, 0.66, 0.56, 0.96);

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easing,
      duration: 0.7,
      delay: 1,
    },
  },
  exit: {
    y: -1000,
    transition: {
      ease: easing,
      duration: 0.7,
      delay: 1,
    },
  },
};
type InitialAnimationTypes = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const InitialAnimation = ({ setLoading }: InitialAnimationTypes) => {
  return (
    <div className="!w-full h-screen absolute top-0 z-40">
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        className="flex justify-center items-center w-full bg-white text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold !leading-normal h-screen z-50"
      >
        Gianfranco Studio
      </motion.div>
    </div>
  );
};

export default InitialAnimation;
