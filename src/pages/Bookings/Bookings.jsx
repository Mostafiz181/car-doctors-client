import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Bookings = () => {

    const {user}= useContext(AuthContext);

    const [bookings,setBookings]=useState([])

    const url = `http://localhost:8000/bookings?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h2>this is bookings</h2>
        </div>
    );
};

export default Bookings;