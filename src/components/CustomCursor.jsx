import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed w-6 h-6 border-2 border-gray-800 rounded-full pointer-events-none z-50"
      animate={{
        top: y,
        left: x,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
};

export default CustomCursor;
