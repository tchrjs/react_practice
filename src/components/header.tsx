import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="container border-b border-border">
      <div className="container-wrapper py-2">
        <div className="flex justify-between items-center text-sm">
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
          <div className="flex gap-4 w-1/2 justify-end">
            <a href="/">My Account</a>
            <a href="/">My Wishlist</a>
            <a href="/">Checkout</a>
            <a href="/">Log In</a>
          </div>
        </div>
      </div>
    </header>
  );
}
