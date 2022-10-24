import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Link, useLoaderData } from "react-router-dom";


const Tinformation = () => {
  const travels = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
 
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url(${travels.img})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-9xl font-bold px-10 text-sky-900">
            {travels.title}
          </h1>
          <p className="py-6 px-10 text-2xl text-white font-semibold">
            {travels.description}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">From</span>
              </label>
              <input
                type="text"
                placeholder={travels.from}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">To</span>
              </label>
              <input
                type="text"
                placeholder={travels.to}
                className="input input-bordered"
              />
            </div>


           <div>
           <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

           </div>


            <div className="form-control mt-6">
              <button className="btn bg-sky-800 border-none">
              <Link to='/booking'>Start booking</Link>
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-sky-800 border-none">
                <Link to="/">Go back</Link>
              </button>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Tinformation;
