import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../../Hooks/useCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        navigate("/");
      })
      .catch(error);
  };
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
        <Link to={`/shop/Salads`}>OUR SHOP</Link>
      </li>
      <li>
        <Link>
          <button className="flex">
            <BsCart4 className="text-2xl" />
            <div className="badge badge-secondary -ms-4 -mt-2">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      <li>
        {user ? <Link onClick={handleLogOut}>SIGN OUT</Link> : <Link to="/login">SIGN IN</Link>}
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

        {user ? (
          user?.photoURL ? (
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              data-toggle="tooltip"
              title={user?.displayName}
              placement="bottom"
              src={`${user?.photoURL}`}
              alt=""
            />
          ) : (
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              data-toggle="tooltip"
              title={user?.displayName}
              placement="bottom"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1685422406~exp=1685423006~hmac=e59b31bb2d641320f0cbcf5687b1c566606e735e651c1a9963ef78acdf217c56"
              alt=""
            />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
