import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import img1 from "../../assets/images/checkout/checkout.png";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:8000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <div className="relative">
        <img src={img1} className="w-full " alt="" />

        <div className="absolute h-full w-full rounded-lg left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h2 className="text-white py-5 font-bold text-5xl text-center pt-10 items-center">
            Cart Details
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto w-full mt-4">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>

            {
              bookings.map( booking=> <BookingsRow
              key={booking._id}
              booking={booking}
              
              ></BookingsRow>)
            }


          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Bookings;
