import { motion, AnimatePresence } from 'framer-motion';

const CornerInfo = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="max-w-xs text-right bg-white p-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <p className="text-sm leading-relaxed text-gray-600">
            Sempre que alguém me perguntava qual o meu livro favorito, a minha mente ficava em branco. Criei este site para ser a minha resposta. Nele estão alguns dos livros de que mais gosto, com a minha opinião pessoal sobre cada um. Como é uma seleção de memória, não sei se me lembrei de todos, e talvez a lista seja atualizada um dia (provavelmente não). Para navegar, basta clicar na direção que deseja ir.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CornerInfo;