import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductsCard = ({ items }) => {
  const handleAddToCart = (aciProducts) => {
    console.log(aciProducts);
  };
  const { name, image, category, price } = items;
  return (
    <div>
      <section>
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
