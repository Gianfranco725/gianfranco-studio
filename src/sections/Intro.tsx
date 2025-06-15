"use client";
import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    new SplitType("h2", {
      types: "lines,words",
      tagName: "span",
    });
  }, []);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        { duration: 0.5, delay: stagger(0.2) }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section
      className="py-24 md:py-32 lg:py-40 mt-12 md:mt-16 lg:mt-20"
      id="about"
      ref={sectionRef}
    >
      <div
        className="container !max-w-full flex flex-col md:flex-row justify-between gap-4 md:gap-7"
        ref={scope}
      >
        <h2 className="text-4xl lg:text-6xl tracking-[-2.4px] lg:w-[80%]lg:pr-[16rem] pb-0">
          {/* Building beautiful websites with clean code and thoughtful design to
          help your business grow and stand out online */}
          Building responsive user interfaces, ensures cross-browser
          compatibility, optimizes performance, integrates APIs, debugs issues,
          and enhances user experience through clean code.
        </h2>
        <h2 className="font-medium text-2xl tracking-[-1.5px]" ref={scope}>
          gianfranco725@hotmail.com
        </h2>
      </div>
    </section>
  );
};

export default Intro;
