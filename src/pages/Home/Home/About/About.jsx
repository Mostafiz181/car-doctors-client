import React from 'react';
import person from "../../../../assets/images/about_us/person.jpg"
import parts from "../../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero my-10 py-10">
            <div className="hero-content h-full flex-col w-full  lg:flex-row ps-0">
               <div className=' relative  w-3/4 '>
                  <img src={person} className="rounded-lg shadow-2xl h-[470px] " />
                  <img src={parts} alt="" className="rounded-lg w-1/2 border-8 border-white absolute right-0 bottom-[-50px]" />
               </div>
            <div className=' h-full w-1/2 px-2'>
                <h2 className='text-3xl text-orange-400 font-bold '>About Us</h2>
                <h1 className="text-5xl font-bold py-2">We are qualified <br /> & of experience <br /> in this field</h1>
                 <p>There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br />  look even slightly believable. </p>

                 <p>the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable. </p>
                <button className="btn btn-primary mt-5 font-bold">Get More Info</button>
            </div>
        </div>
      </div>
    );
};

export default About;