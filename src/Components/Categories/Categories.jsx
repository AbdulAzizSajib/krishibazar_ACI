// import React from "react";

import cowImg from "/src/assets/Images/Icons/cow.png";
import fishImg from "/src/assets/Images/Icons/fish.png";
import chickenImg from "/src/assets/Images/Icons/chicken.png";
import petImg from "/src/assets/Images/Icons/pet.png";
import vaccineImg from "/src/assets/Images/Icons/vaccine.png";
import animalGeneticsImg from "/src/assets/Images/Icons/animalGenetics.png";
import fertilizerImg from "/src/assets/Images/Icons/fertilizer.png";
import vegetableImg from "/src/assets/Images/Icons/vegetable.png";

const Categories = () => {
  const imageInfo = [
    { name: "Cattle", img: cowImg },
    { name: "Fish", img: fishImg },
    { name: "Poultry", img: chickenImg },
    { name: "Pet & Birds", img: petImg },
    { name: "Vaccine", img: vaccineImg },
    { name: "Animal Genetic", img: animalGeneticsImg },
    { name: "Fertilizer", img: fertilizerImg },
    { name: "Vegetables Seeds ", img: vegetableImg },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-2 md:grid-cols-4 lg:grid-cols-8 mt-4 bg-[#f5fffb] border">
      {imageInfo.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-[120px] h-[120px] flex items-center justify-center bg-[#e3fff3] rounded-full border-2 border-green-600 transition-transform duration-300 ease-in-out hover:scale-110">
            <img src={item.img} alt={item.name} className="w-[65px]" />
          </div>
          <h2 className="mt-1 text-lg font-semibold text-center">
            {item.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;
