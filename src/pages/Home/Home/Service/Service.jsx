import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {

    const [service,setService]=useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return (
        <div className='mt-5 bg-orange-300 py-5'>
            <div className='text-center'>
                <h3 className='font-bold text-3xl text-orange-500'>Service</h3>
                <h1 className='font-bold text-5xl mt-2'>Our Service Area</h1>

                 <p className='font-bold text-1xl mt-2 text-[#737373]'> the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 ms-5' >
            {
                service.map(service=> <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
           </div>

        </div>
    );
};

export default Service;