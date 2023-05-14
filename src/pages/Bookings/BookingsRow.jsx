import React from "react";

const BookingsRow = ({booking}) => {

    const {customerName,email,date,service,price,img}=booking;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {
                img && <img src={img} alt="Avatar Tailwind CSS Component" />
              }
                
                
            
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            
          </div>
        </div>
      </td>
      <td>
        {customerName}
       

      </td>
      <td>{email}</td>
      <td>$ {price}</td>
      <td> {date}</td>
      <th>
        <button className="btn btn-primary">details</button>
      </th>
    </tr>
  );
};

export default BookingsRow;
