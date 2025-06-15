"use client";
import { FC, useEffect } from "react";
import Button from "@/components/Button";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { cubicBezier } from "motion";
const easing = cubicBezier(0.37, 0.66, 0.56, 0.96);

const Hero: FC = () => {
  /*   const [titleScope, titleAnimate] = useAnimate(); */
  const { scope, entranceAnimation } = useTextRevealAnimation();
  /*   const scrollingDiv = useRef<HTMLDivElement>(null); */
  /*   const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  }); */

  /*   const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]); */

  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation]);

  /*   useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });
    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.1),
      }
    );
  }, []); */
  const [scopeHero, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });
  useEffect(() => {
    if (inView) {
      animate(
        scopeHero.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        { duration: 0.5, delay: stagger(0.2) }
      );
    }
  }, [inView, animate, scopeHero]);

  return (
    <section className="hero">
      <div className="container !max-w-full h-screen flex flex-col">
        <div className="hero__text-container relative">
          <div className="hero__text-valley flex flex-col md:flex-row mb-4 md:mb-0 md:items-center md:gap-8 lg:gap-32 justify-between">
            <motion.div
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: easing, duration: 1, delay: 0.7 }}
              ref={scope}
              className="text-[7rem] md:text-[12rem] lg:text-[10rem] font-medium !leading-normal tracking-tight text-neutral-950"
            >
              valley
            </motion.div>
            <h2
              className="text-3xl lg:text-5xl tracking-[-2.4px] text-neutral-950"
              ref={scopeHero}
            >
              Designer and Web developer dedicated to turn your ideas into
              compelling visuals.
              {/* “Creativity is intelligence having fun.”
              {<br />}
              <span>— Albert Einstein</span> */}
            </h2>
          </div>
          <div className="flex gap-6 relative md:left-4 bottom-0">
            <motion.div
              initial={{ opacity: 0, y: "100% " }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.8,
              }}
            >
              <a href="#projects">
                <Button
                  variant="text"
                  iconAfter={
                    <div className="overflow-hidden size-5 text-neutral-900">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  {" "}
                  <span>View My Work</span>
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "100% " }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 2.2,
              }}
            >
              <a href="#contact">
                <Button variant="text">Lets&apos;s Talk</Button>
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="hero__image-container"
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: easing, duration: 1, delay: 0.9 }}
        >
          {""}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
