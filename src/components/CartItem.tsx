import React from "react";
import removeSvg from "../assets/icons/remove.svg";
import { IBook } from "../types";

interface ICartItemProps {
  book: IBook;
  handleCartItems: (action: string, book: IBook) => void;
}

const CartItem = ({ book, handleCartItems }: ICartItemProps) => {
  return (
    book && (
      <li className="bg-grey-light p-5 lg:mx-0 mx-3 lg:w-full w-[80%] rounded-[30px] flex gap-3 items-center justify-between relative">
        <img
          className="w-[105px] h-auto"
          src={book.imgSrc}
          alt="book"
          title={book.title}
        />
        <div className="grow flex md:flex-nowrap flex-wrap md:flex-row  flex-col gap-2 md:justify-between items-center">
          <span className="text-center">{book.title}</span>
          <span>Rs. {book.price.toFixed(2)}</span>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => handleCartItems("decrement", book)}
              className="font-bold text-lg px-2"
            >
              -
            </button>
            <span className=" flex justify-center items-center border border-black bg-transparent p-3 w-8 h-8 rounded">
              {book.quantity}
            </span>
            <button
              onClick={() => handleCartItems("increment", book)}
              className="font-bold text-lg px-2"
            >
              +
            </button>
          </div>
          <span>Rs. {((book.quantity || 1) * book.price).toFixed(2)}</span>
        </div>
        <button
          onClick={() => handleCartItems("remove", book)}
          className="absolute -right-10"
        >
          <img
            src={removeSvg}
            className="w-auto h-auto"
            alt="remove icon"
            title="remove icon"
          />
        </button>
      </li>
    )
  );
};

export default CartItem;
