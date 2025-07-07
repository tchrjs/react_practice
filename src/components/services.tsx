import { FaGift, FaPhone, FaTruck } from "react-icons/fa";

export default function Services() {
  return (
    <div className="container bg-[#e84d1c]">
      <div className="container-wrapper py-8 flex flex-col gap-5 justify-between">
        <div className="border-2 border-white text-white p-4">
          <div className="flex gap-3">
            <div className="border-2 rounded-full p-3 flex items-center justify-center">
              <FaTruck className="-scale-x-100 w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className="text-3xl">FREE SHIPPING</p>
              <p>EXPRESS DELIVERY WITHIN 3 DAYS</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-white text-white p-4">
          <div className="flex gap-3">
            <div className="border-2 rounded-full p-3 flex items-center justify-center">
              <FaGift className="-scale-x-100 w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className="text-3xl">DAILY GIFTS</p>
              <p>3 GIFTS DAILY FOR LUCKY CUSTOMERS</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-white text-white p-4">
          <div className="flex gap-3">
            <div className="border-2 rounded-full p-3 flex items-center justify-center">
              <FaPhone className="-scale-x-100 w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <p className="text-3xl">477 505 8877</p>
              <p>24/7 CUSTOMER CARE AVAILABLE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
