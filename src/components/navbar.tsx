import { FaShoppingCart } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="container flex">
      <div className="container-wrapper w-full py-7">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src="/logo-shop-red.png" />
          </a>
          <div>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
}
