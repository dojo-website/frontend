"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ children, delay = 0, direction = "bottom" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    top: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
    bottom: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } },
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction] || variants.bottom}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
