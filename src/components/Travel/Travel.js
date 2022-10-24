import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Travel = ({travel}) => {
    const {img,title,id} = travel;
    const navigate = useNavigate()
    const handleNavigate = () =>{
       navigate(`/travels/${id}`)
    }
  return (
    <div onClick={handleNavigate} className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer' >
    <div className="card md:w-96 m-4 bg-base-100 shadow-xl image-full">
  <figure >
 <img   src={img} alt="places" />
      </figure>
      <div className="card-body relative">
        <h2 className="card-title text-5xl absolute bottom-5 hover:bg-sky-800 p-3"> <Link to={`/travels/${id}`}>{title}</Link></h2>
      </div> 
    </div>
    </div>
  );
};

export default Travel;
