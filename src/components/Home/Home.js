import React from "react";
import { useLoaderData } from "react-router-dom";
import Travel from "../Travel/Travel";

const Home = () => {
    const travels=useLoaderData();
    console.log(travels)
  return (
    <div>
      <div className="hero min-h-screen bg-sky-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-psd/best-trip-lettering-with-earth-globe-airplane-toy_23-2148212918.jpg?w=1380&t=st=1666497331~exp=1666497931~hmac=6a5812c045bcc8dbb8d507f190d8ba2053c6035c2713107e6744ff01d11046d9"
            className="md:w-[50%] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-7xl font-bold text-sky-900">The Best Trip!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-sky-800">Get Started</button>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center items-center my-16">
      {
                travels.map(travel=><Travel
                key={travel._id}
                travel={travel}
                ></Travel>)
            }
      </div>
    </div>
  );
};

export default Home;
