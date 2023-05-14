import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import img1 from "../../assets/images/checkout/checkout.png";
import {AuthContext} from '../../providers/AuthProvider'

import Swal from 'sweetalert2'

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id,price,img } = service;
  const {user}= useContext(AuthContext)

  const handleBookService=event=>{
    event.preventDefault();
    const form =event.target;
    const name=form.name.value;
    const date=form.date.value;
    const email= user?.email;
    const order={
      customerName:name,
      email,
      date,
      img,
      service:title,
      service_id:_id,
      price:price
    }
    console.log(order)

    fetch('http://localhost:8000/bookings',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(order)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)

      if(data.insertedId){

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'service booking successfully',
          showConfirmButton: false,
          timer: 1500
        })

      }
    })

  }

  
  return (
    <div>
      <div className="relative">
        <img src={img1} className="w-full " alt="" />

        <div className="absolute h-full w-full rounded-lg left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h2 className="text-white py-5 font-bold text-5xl text-center pt-10 items-center">
            Checkout
          </h2>
        </div>
      </div>


      <div className="hero bg-base-200 ">
        <form className="w-full" onSubmit={handleBookService}>
        <h1 className="text-3xl font-bold text-center pt-3">Book Service: {title}</h1>
          <div className="hero-content w-full">
            <div className="card  w-full h-full  ">
              <div className="card-body px-5">
                <div className="flex">
                  <div className="form-control mr-2   w-1/2">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control w-1/2">
                    <input
                      type="date"
                      placeholder="Date"
                      name="date"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="flex py-3">
                  <div className="form-control mr-2 w-1/2">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      defaultValue={user?.email}
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control w-1/2">
                    <input
                      type="text"
                      placeholder="Due Amount"
                      defaultValue={"$"+ price}
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Order Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
