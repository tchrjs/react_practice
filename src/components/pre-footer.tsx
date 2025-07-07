export default function PreFooter() {
  return (
    <div className="container bg-[#313030]">
      <div className="container-wrapper py-10">
        <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-8 text-[#c2c1c1]">
          <div>
            <p className="mb-2 text-xl">ABOUT US</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              sit nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquarm erat sit volutpat. Nostrud exerci tation ullamcorper
              suscipit lobortis nisl aliquip commodo consequat.
            </p>
            <br />
            <p className="text-sm">
              Duis autem vel eum iriure dolor vulputate velit esse molestie at
              dolore.
            </p>
          </div>
          <div>
            <p className="mb-2 text-xl">LATEST TWEETS</p>
            <p className="text-sm">
              <a>Loading tweets by @keenthemes...</a>
            </p>
          </div>
          <div>
            <p className="mb-2 text-xl">INFORMATION</p>
            <div className="text-sm">
              <ul>
                <li>Delivery Information</li>
                <li>Customer Service</li>
                <li>Order Tracking</li>
                <li>Shipping & Returns</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Payment Methods</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xl">OUR CONTACTS</p>
            <div className="text-sm">
              <p>35, Lorem Lis Street, Park Ave</p>
              <p>California, US</p>
              <p>Phone: 300 323 3456</p>
              <p>Fax: 300 323 1456</p>
              <p>
                Email: <a>info@metronic.com</a>
              </p>
              <p>
                Skype: <a>metronic</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
