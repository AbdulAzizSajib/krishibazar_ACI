import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link className="font-bold text-green-600">Help & Contact</Link>
      </li>
      <li>
        <Link className="font-bold text-green-600">Order Tracking</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-[999]">
        <div className="flex w-full  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Line className="text-xl"></RiMenu2Line>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a
            href="/"
            className=" tracking-tight text-xl font-bold text-green-600"
          >
            ACI Krishibazar
          </a>
          <ul className="menu menu-horizontal hidden lg:flex">{navLinks}</ul>
          <div className="form-control w-1/2 hidden lg:flex  ">
            <input
              type="text"
              placeholder="Search"
              className="input input-success rounded-full"
            />
          </div>
        </div>
        {/* <div className=" hidden lg:flex border w-full border-green-600">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered "
            />
          </div>
        </div> */}
        <div className=" flex flex-1 justify-end w-full  space-x-1">
          <button className="btn hover:bg-green-600 hidden sm:flex btn-circle btn-sm bg-green-600 text-white">
            <div className="indicator">
              <IoMdNotificationsOutline className="text-xl"></IoMdNotificationsOutline>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button className="btn hover:bg-green-600 hidden md:flex  btn-circle btn-sm bg-green-600 text-white">
            <IoHeartOutline className="text-xl"></IoHeartOutline>
          </button>
          <button className="btn hover:bg-green-600  btn-circle btn-sm bg-green-600 text-white">
            <IoCartOutline className="text-xl"></IoCartOutline>
          </button>
          {/* <button className="btn hover:bg-green-600  btn-circle btn-sm bg-green-600 text-white">
            <FiUser className="text-xl"></FiUser>
          </button> */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
