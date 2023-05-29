import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT US</Link>
      </li>
      <li>
        <Link to="/dashboard">DASHBOARD</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU </Link>
      </li>
      <li>
        <Link to="/shop">OUR SHOP</Link>
      </li>
      <li>
        <Link to="/login">LOGIN</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 md:px-[8%] bg-black  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52  font-medium text-black "
          >
            {navItems}
          </ul>
        </div>
        <div className="normal-case text-xl ">
          <p className="md:text-3xl font-semibold">BISTRO BOSS</p>
          <p className="text-xs md:text-xl font-semibold tracking-[0.38rem] ">RESTAURANT</p>
        </div>
      </div>
      <div className="navbar-end">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal font-medium">{navItems}</ul>
        </div>

        <img
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=721&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
