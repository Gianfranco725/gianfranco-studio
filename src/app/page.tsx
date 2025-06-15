"use client";
import InitialAnimation from "@/components/InitialAnimation";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <InitialAnimation setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Hero />
          <Intro />
          <Projects />
          <Testimonials />
          <FAQs />
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}
