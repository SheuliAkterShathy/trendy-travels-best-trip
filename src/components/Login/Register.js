import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";

const Register = () => {
  const {signInWithGoogle,signInWithFaceBook,signInWithGithub,createUser} = useContext(AuthContext);
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const photoURL = form.photoURL.value;
         console.log(name,email,password)

         createUser(email,password)
         .then(result=>{
             const user= result.user;
             console.log(user)
             toast.success('register success')
         })
         .catch(error=>console.error(error))
       
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            const user= result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }


    const handleFacebookSignIn = () =>{
        signInWithFaceBook()
        .then(result=>{
            const user= result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result=>{
            const user= result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

   
  return (
    <div>
    <div className=" hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="py-5  flex flex-col mx-auto">
            <h2 className="text-center text-3xl font-semibold">
              Or sign with
            </h2>
            <button onClick={handleGoogleSignIn} className="w-96 mx-auto btn-outline bg-sky-500 m-4 p-2 rounded-xl">
              Sign with Google
            </button>
            <button onClick={handleFacebookSignIn} className="w-96 mx-auto btn-outline bg-sky-500 m-4 p-2 rounded-xl">
              Sign with Facebook
            </button>
            <button onClick={handleGithubSignIn} className="w-96 mx-auto btn-outline bg-sky-500 m-4 p-2 rounded-xl">
              Sign with Github
            </button>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
