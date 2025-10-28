import { motion, AnimatePresence } from "framer-motion";

const CornerInfo = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-white p-8 text-left
                     md:relative md:inset-auto md:z-auto md:bg-transparent md:p-0 
                     md:text-right md:max-w-xs"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="max-w-xl md:max-w-xs">
            <h2 className="text-2xl font-bold uppercase text-gray-900 mb-4 md:hidden">
              what the f*** is that?
            </h2>

            <p className="text-base leading-relaxed text-gray-600 md:text-sm md:text-gray-500">
              Uma coleção dos meus livros favoritos com resenhas
              pessoais. Clique em qualquer direção para navegar.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CornerInfo;
