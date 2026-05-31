import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw", // Starts completely off-screen to the left
  },
  in: {
    opacity: 1,
    x: 0,        // Slides into the center
  },
  out: {
    opacity: 0,
    x: "100vw",  // Slides off-screen to the right on exit
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const PageLayout = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;