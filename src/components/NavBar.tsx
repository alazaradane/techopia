import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/icons";
import { menu } from "../assets/images";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="relative flex items-center mb-5 p-4 lg:p-0">
      {/* Logo and Menu Button */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-10 h-10 lg:w-40 lg:h-40" />
          <p className="text-xl lg:text-2xl font-bold text-secondary font-Rub pb-1 lg:pb-5">
            <span className="text-secondary-blue">TECH</span>OPIA
          </p>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <img src={menu} alt="humburger" onClick={handleMenuToggle} className=" w-5 h-5 m-3 cursor-pointer"/>
        </div>
      </div>

      {/* Main Links */}
      <div className={`hidden lg:flex items-center ml-0 lg:ml-[20rem] mb-4 gap-4 lg:gap-[2rem] font-poppins font-semibold text-md text-secondary`}>
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/event">Events</Link>
      </div>

      {/* Contact Us Link */}
      <div className="hidden lg:flex items-center ml-0 lg:ml-[5rem] mb-4 font-poppins font-semibold text-md bg-white rounded-[2rem] px-5 py-2">
        <Link to="/contact_us">Contact Us</Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full mt-4">
          <div className="flex flex-col items-center gap-4 font-poppins font-semibold text-md text-secondary">
            <Link to="/">Home</Link>
            <Link to="/project">Projects</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/event">Events</Link>
            <Link to="/contact_us" className="bg-white rounded-[2rem] px-5 py-2">Contact Us</Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavBar;
