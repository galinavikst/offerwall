import { IBook } from "../types";

interface IBookProps {
  book: IBook;
  addToCart: (el: IBook) => void;
}

const Book = ({ book, addToCart }: IBookProps) => {
  return (
    <li className="flex flex-col gap-3 text-black">
      <img
        width={305}
        height={275}
        src={book.imgSrc}
        title="the best book"
        alt={book.title + " book"}
        className="shadow-md rounded-[30px]"
      />
      <div className="bg-white rounded-[30px] shadow-md p-2.5">
        <h3 title={book.title} className="text-center font-bold uppercase mb-3">
          {book.title}
        </h3>
        <div className="flex items-center">
          <p className="w-1/2 text-center font-bold text-red-500">
            {book.price} $
          </p>
          <button
            onClick={() => addToCart(book)}
            className="w-1/2 btn-accent-contained"
          >
            buy
          </button>
        </div>
      </div>
    </li>
  );
};

export default Book;
