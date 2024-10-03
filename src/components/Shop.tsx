import React from "react";
import { BOOKS } from "../constants";
import Book from "./Book";

const Shop = () => {
  return (
    <section className="section">
      <h2 className="heading2" title="book shop">
        Shop
      </h2>
      <ul className="flex flex-wrap gap-x-5 md:gap-y-10 gap-y-14 justify-center">
        {BOOKS.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <button className="btn-accent-contained w-56 p-5">see more</button>
    </section>
  );
};

export default Shop;
