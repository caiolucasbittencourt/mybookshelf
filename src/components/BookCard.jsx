import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  return (
    <motion.div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8 md:gap-16">
      <div className="flex-shrink-0">
        <img
          src={book.cover}
          alt={`Cover of ${book.title}`}
          draggable="false"
          className="w-48 sm:w-56 md:w-72 object-cover select-none shadow-2xl"
        />
      </div>

      <div className="text-center md:text-left">
        <p className="text-sm md:text-base text-gray-500 mb-2">
          by {book.author}
        </p>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 uppercase text-gray-800 leading-none">
          {book.title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
          {book.review}
        </p>
        <p className="text-lg md:text-xl font-black text-gray-800">
          {book.rating}
          <span className="text-gray-400 font-light">/5</span>
        </p>
      </div>
    </motion.div>
  );
};

export default BookCard;
