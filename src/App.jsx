import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { booksData } from "./data/books.js";

import SplashScreen from "./components/SplashScreen";
import BookCard from "./components/BookCard";
import CornerInfo from "./components/CornerInfo";
import CustomCursor from "./components/CustomCursor";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100vw" : "-100vw",
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 25, duration: 0.8 },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100vw" : "-100vw",
    opacity: 0,
    scale: 0.9,
    transition: { type: "spring", stiffness: 150, damping: 25, duration: 0.8 },
  }),
};

function App() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const paginate = (newDirection) => {
    const newPage = (page + newDirection + booksData.length) % booksData.length;
    setPage([newPage, newDirection]);
  };

  const handleAnimationComplete = () => setIsAnimating(false);

  const handleScreenClick = (event) => {
    if (isAnimating) return;
    if (isInfoVisible) {
      setIsInfoVisible(false);
      return;
    }
    const { clientX } = event;
    const screenWidth = window.innerWidth;
    if (clientX > screenWidth / 2) {
      paginate(1);
    } else {
      paginate(-1);
    }
  };

  const handleInfoToggle = (e) => {
    e.stopPropagation();
    setIsInfoVisible((prev) => !prev);
  };

  const prevPage = (page - 1 + booksData.length) % booksData.length;
  const nextPage = (page + 1) % booksData.length;

  return (
    <AnimatePresence mode="wait">
      {isAnimating ? (
        <motion.div
          key="splash"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <SplashScreen onAnimationComplete={handleAnimationComplete} />
        </motion.div>
      ) : (
        <motion.main
          key="content"
          className="relative w-full min-h-screen flex items-center justify-center bg-white p-4 md:p-8 md:cursor-none overflow-hidden"
          onClick={handleScreenClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="hidden md:block">
            <CustomCursor />
          </div>
          <div
            onClick={handleInfoToggle}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-20 flex flex-col items-end"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-4">
              what the f*** is that?
            </p>
            <CornerInfo isVisible={isInfoVisible} />
          </div>

          <motion.div
            key={`prev-${page}`}
            initial={{ x: "-150%", scale: 0.7, opacity: 0 }}
            animate={{ x: "-85%", scale: 0.7, opacity: 0.4 }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            className="absolute pointer-events-none blur-sm"
          >
            <BookCard book={booksData[prevPage]} />
          </motion.div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ position: "absolute" }}
            >
              <BookCard book={booksData[page]} />
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={`next-${page}`}
            initial={{ x: "150%", scale: 0.7, opacity: 0 }}
            animate={{ x: "85%", scale: 0.7, opacity: 0.4 }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            className="absolute pointer-events-none blur-sm"
          >
            <BookCard book={booksData[nextPage]} />
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default App;
