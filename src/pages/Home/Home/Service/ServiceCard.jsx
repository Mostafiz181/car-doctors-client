import React from "react";

import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({service}) => {

    const {img,title,price}=service;
  return (
    <div className="w-full">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-300 font-bold">Price:${price}</p>
          <div className="card-actions">
            <button className="text-orange-300 ms-[300px]"><FaArrowRight></FaArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
