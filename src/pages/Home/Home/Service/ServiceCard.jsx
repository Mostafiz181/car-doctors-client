import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {

    const {_id,img,title,price}=service;
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
            <Link to={`/checkout/${_id}`}><button className="text-orange-300 ms-[300px]"><FaArrowRight></FaArrowRight></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
