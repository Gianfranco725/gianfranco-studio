"use client";
import { FC, useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

const Testimonials: FC = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section className="py-8 md:py-24" id="testimonials">
      <h3
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformTop,
          }}
        >
          Curious about what we can create together?
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500 pb-3"
          style={{
            x: transformBottom,
          }}
        >
          Curious about what we can create together?
        </motion.span>
      </h3>
    </section>
  );
};

export default Testimonials;
