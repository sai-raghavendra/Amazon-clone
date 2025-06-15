import { Search } from "./";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="w-full">
      <div className="flex flex-col lg:flex-row bg-amazonclone text-white h-auto lg:h-[60px]">
        <div className="flex items-center m-2 lg:m-4">
          <Link to={"/"}>
            <img
              className="h-[30px] w-[80px] sm:h-[35px] sm:w-[100px]"
              src={"../images/amazon.png"}
              alt="Amazon"
            />
          </Link>
          <div className="pr-2 pl-2 lg:pr-4 lg:pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">Bharat</div>
          </div>
        </div>
        <div className="flex grow relative items-center px-2 py-1">
          <Search />
        </div>
        <div className="flex items-center m-2 lg:m-4">
          <div className="pr-2 pl-2 lg:pr-4 lg:pl-4 hidden sm:block">
            <div className="text-xs xl:text-sm">Hello, Sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Account & Liste
            </div>
          </div>
          <div className="pr-2 pl-2 lg:pr-4 lg:pl-4 hidden sm:block">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-2 pl-2 lg:pr-3 lg:pl-3">
              <ShoppingCartIcon className="h-[32px] sm:h-[40px] lg:h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-5 sm:mt-7 text-xs xl:text-sm font-bold">
                cart
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap bg-amazonclone-light_blue text-white space-x-2 sm:space-x-3 text-xs xl:text-sm p-1 sm:p-2 pl-2 sm:pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Card</div>
        <div>Sell</div>
      </div>
    </header>
  );
}

export default NavBar;
