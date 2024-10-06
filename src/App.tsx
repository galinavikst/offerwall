import { useState } from "react";
import toast from "react-hot-toast";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NAV, BOOKS } from "./constants";
import { IBook, INavItem } from "./types";
import Cart from "./components/Cart";
import Book from "./components/Book";

function App() {
  const [nav, setNav] = useState<INavItem[]>(NAV);
  const [cartItems, setCartItems] = useState<IBook[]>([]);

  const handleNav = (selected: INavItem) => {
    const updatedNav = nav.map((el) =>
      el.id === selected.id
        ? { ...el, isActive: true }
        : { ...el, isActive: false }
    );
    setNav(updatedNav);
  };

  const addToCart = (book: IBook) => {
    if (cartItems.find((el) => el.id === book.id)) {
      toast.error("This book alredy added, change the quantity in your cart");
    } else {
      const updatedCart = [...cartItems, { ...book, quantity: 1 }];
      setCartItems(updatedCart);
      toast.success("Added to cart");
    }
  };

  const removeFromCart = (book: IBook) => {
    const updatedCart = cartItems.filter((el) => el.id !== book.id);
    toast.success("Removed from cart");
    return updatedCart;
  };

  const handleCartItems = (action: string, book: IBook) => {
    let updatedCart: IBook[] = [];

    switch (action) {
      case "increment":
        updatedCart = cartItems.map((el) =>
          el.id === book.id
            ? {
                ...el,
                quantity:
                  (el.quantity as number) >= 10
                    ? 10
                    : (el.quantity as number) + 1,
              }
            : el
        );
        break;

      case "decrement":
        updatedCart = cartItems
          .map((el) =>
            el.id === book.id
              ? { ...el, quantity: (el.quantity as number) - 1 }
              : el
          )
          .filter((el) => (el.quantity as number) > 0);
        break;

      case "remove":
        updatedCart = removeFromCart(book);
        break;
    }

    setCartItems(updatedCart);
  };

  const activeSectionId = nav.find((el) => el.isActive)?.id;

  return (
    <>
      {nav && <Header nav={nav} setNav={handleNav} />}
      <main className="grow bg-bg-light sm:py-16 lg:py-36 sm:px-14 px-5 py-10">
        {activeSectionId === "cart" ? (
          <Cart
            data={cartItems}
            handleNav={handleNav}
            handleCartItems={handleCartItems}
          />
        ) : (
          <section className="section" id="shop">
            <h2
              className="font-bold lg:text-4xl text-2xl text-black"
              title="book shop"
            >
              Shop
            </h2>
            <ul className="flex flex-wrap gap-x-5 md:gap-y-10 gap-y-14 justify-center">
              {BOOKS.map((book) => (
                <Book key={book.id} book={book} addToCart={addToCart} />
              ))}
            </ul>
            <button
              onClick={() => toast.error("no more books to show")}
              className="btn-accent-contained w-56 p-5"
            >
              see more
            </button>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
