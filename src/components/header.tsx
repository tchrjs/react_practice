import { FaPhoneAlt } from "react-icons/fa";
import NavBar from "./navbar";

export default function Header() {
  return (
    <header>
      {/* TOP BAR */}
      <div className="flex px-8 py-2">
        {/* LEFT TOP BAR */}
        <div className="flex gap-4 w-1/2">
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="w-3 h-3" />
            <p>+1 456 6717</p>
          </div>
          <div className="flex gap-2">
            <a href="/">€</a>
            <a href="/">£</a>
            <a href="/">$</a>
          </div>
          <div>English</div>
        </div>
        {/* RIGHT TOP BAR */}
        <div className="flex gap-4 w-1/2 justify-end">
          <a href="/">My Account</a>
          <a href="/">My Wishlist</a>
          <a href="/">Checkout</a>
          <a href="/">Log In</a>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
