import Form from "./Form";
import CartItem from "./CartItem";
import { IBook, INavItem } from "../types";
import { NAV } from "../constants";

interface ICartProps {
  data: IBook[];
  handleNav: (el: INavItem) => void;
  handleCartItems: (action: string, el: IBook) => void;
}

const Cart = ({ data, handleNav, handleCartItems }: ICartProps) => {
  const total = data.reduce((acc, el) => {
    return acc + el.price * (el.quantity || 1);
  }, 0);

  return (
    <section className="section text-black">
      <div className="bg-white lg:flex lg:gap-8 block md:w-[95%] w-full rounded-[30px] overflow-hidden m-4 md:m-14">
        <div className="lg:w-[60%] lg:mb-0 mb-20 w-full lg:p-14 p-0 flex flex-col justify-between">
          <div>
            <h2
              title="company shoping cart"
              className="lg:text-2xl font-semibold lg:mb-6 lg:m-0 m-3"
            >
              Shopping Cart
            </h2>
            <ul className="flex flex-col gap-y-3 py-6 border-t border-grey-light">
              {data.length === 0 ? (
                <p className=" opacity-70 text-sm mx-3">
                  no items in the cart...
                </p>
              ) : (
                data.map((book) => (
                  <CartItem
                    key={book.id}
                    book={book}
                    handleCartItems={handleCartItems}
                  />
                ))
              )}
            </ul>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-3 justify-between lg:mx-0 mx-3 lg:w-full w-[80%]">
            <a
              onClick={() =>
                handleNav(NAV.find((el) => el.id === "shop") as INavItem)
              }
              href="#shop"
              className="flex gap-5"
            >
              <span className="font-bold">&lt;</span>
              <span>Back to shop</span>
            </a>

            <div className="flex gap-10 justify-between">
              <span>Subtotal</span>
              <span className="text-red-500 font-bold">
                Rs. {total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Cart;
