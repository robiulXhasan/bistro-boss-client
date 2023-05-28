import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" text-neutral-content">
        <div className="md:flex gap-0 ">
          <div className="bg-[#1F2937] w-full py-10 md:ps-[16%] text-center ">
            <h1 className="footer-title">CONTACT US</h1>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
          <div className="bg-[#111827] w-full py-10 md:pe-[16%] text-center">
            <span className="footer-title">Follow US</span>
            <p>Join us on social media</p>
            <div className="flex gap-4  justify-center text-2xl mt-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="w-full bg-[#151515] p-4 text-center text-xl">
          Copyright © CulinaryCloud. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
