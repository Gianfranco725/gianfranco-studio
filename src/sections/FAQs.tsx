"use client";
import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { twMerge } from "tailwind-merge";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What technologies are you familiar with?",
    answer:
      "I have experience across various technologies including ReactJs, Photoshop, Illustrator, JavaScript, HTML, Vite, CSS, Tailwind, Git, Github, NodeJS, TypeScript, NPM, MongoDB. Mostly focused on design but surely moving towards Full-Stack",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [scope, entranceAnimation, inView]);

  return (
    <section className="py-24 md:py-32 lg:py-40" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl" ref={scope}>
          FAQs
        </h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq cursor-pointer"
              onClick={() => {
                if (faqIndex === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(faqIndex);
                }
              }}
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 group-hover/faq:h-full trasition-all duration-500",
                  faqIndex === selectedIndex && "h-full"
                )}
              ></div>
              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-500 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8 "
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-400 bg-stone-200",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <AnimatePresence>
                  {faqIndex === selectedIndex && (
                    <motion.div
                      className="overflow-hidden lg:px-8"
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: "auto",
                      }}
                      exit={{
                        height: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <p className="text-xl mt-4">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
