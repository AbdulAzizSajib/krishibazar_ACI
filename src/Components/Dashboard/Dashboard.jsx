import React from "react";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../Hooks/useCart";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const Dashboard = () => {
  const [cart] = useCart();
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <div class="w-screen flex">
        <div class=" fixed  w-2/12 pb-10 ">
          <div class="flex min-h-screen flex-grow flex-col overflow-y-auto   bg-zinc-100  shadow-md">
            <div class="flex mt-10 items-center px-4">
              <img
                class="h-12 w-auto max-w-full align-middle rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <div class="flex ml-3 flex-col">
                <h3 class="font-medium">{user?.displayName}</h3>
                <p class="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>

            <span class="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
              Analytics
            </span>

            <div class="flex mt-3 flex-1 flex-col">
              <div class="">
                <nav class="flex-1">
                  <a href="#" title="" class="custom-link">
                    <span>
                      <IoAnalytics className="mr-4 h-5 w-5 align-middle"></IoAnalytics>
                    </span>
                    Dashboard
                  </a>

                  <Link to={"/dashboard/cart"}>
                    <a href="#" class="custom-link">
                      <MdOutlineShoppingCart className=" mr-4 h-5 w-5 align-middle"></MdOutlineShoppingCart>
                      Cart
                      <span class="ml-auto rounded-full bg-rose-600 px-2 text-xs text-white">
                        {cart.length}
                      </span>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  w-8/12 min-h-screen space-y-2 overflow-y-auto ml-64 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
