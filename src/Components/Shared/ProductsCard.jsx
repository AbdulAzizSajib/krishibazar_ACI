import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import useAuth from "../Hooks/useAuth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast from "react-hot-toast";
import useCart from "../Hooks/useCart";
import axios from "axios";

const ProductsCard = ({ items }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();

  const handleAddToCart = (aciProducts) => {
    if (user && user.email) {
      //todo: send cart to db
      const cartItem = {
        menuId: aciProducts._id,
        email: user.email,
        name,
        image,
        price,
      };

      axios.post("http://localhost:5000/carts", cartItem).then((res) => {
        console.log(res.data);
      });
      toast.success(`${aciProducts.name} added to cart`);

      refetch();

      // console.log(aciProducts, user.email, cartItem);
    } else {
      toast.error("Please login to add product to cart");
    }
  };
  const { name, image, category, price } = items;
  return (
    <div>
      <section>
        {/* <ToastContainer theme="dark" autoClose={3000} position="bottom-right" /> */}
        <div className="card border-2 p-4 card-compact w-72 h-96 shadow-xl">
          <figure className="h-48 w-full">
            <img
              className="object-cover h-full w-full "
              src={image}
              alt="ProductsImage"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name} <span className="text-sm font-light">({category})</span>
            </h2>
            <p className="flex items-center text-lg font-bold">
              {price} <TbCurrencyTaka />
            </p>
            <div className="card-actions w-full">
              <button
                onClick={() => handleAddToCart(items)}
                className="btn w-full btn-success text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsCard;
