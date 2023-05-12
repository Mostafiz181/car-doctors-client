import React from "react";
import { FaCalendarAlt, FaFacebookMessenger, FaLocationArrow } from "react-icons/fa";

const Location = () => {
  return (
    <div className="w-full py-10 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-black">
      <div className="flex ps-5 pt-8 text-center">
        <div>
          <FaCalendarAlt className="text-orange-400 mr-2 mt-2 text-3xl"></FaCalendarAlt>
        </div>
        <div>
          <p className="font-bold text-white">We are open monday-friday</p>
          <h3 className="font-bold text-white text-2xl">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex ps-5 pt-8">
        <div >
          <FaFacebookMessenger className="text-orange-400 mr-2 mt-2 text-3xl"></FaFacebookMessenger>
        </div>
        <div>
          <p className="font-bold text-white">Have a question?</p>
          <h3 className="font-bold text-white text-2xl">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex ps-8 pt-8">
        <div >
          <FaLocationArrow className="text-orange-400 mr-2 mt-2 text-3xl"></FaLocationArrow>
        </div>
        <div>
          <p className="font-bold text-white">Need a repair? our address</p>
          <h3 className="font-bold text-white text-2xl">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Location;
