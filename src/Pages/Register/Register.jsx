import React from "react";
import { Link } from "react-router-dom";
import loginBanner from "../../assets/others/authentication.png";
import login from "../../assets/others/authentication2.png";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const Register = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero min-h-screen " style={{ backgroundImage: `url(${loginBanner})` }}>
      <div
        className="hero-content flex-col md:flex-row-reverse  justify-between items-center md:gap-20  md:p-20   my-5 md:my-20 text-center text-neutral-content w-11/12 md:w-10/12 mx-auto  border-2 border-slate-300 shadow-2xl"
        style={{ backgroundImage: `url(${loginBanner})` }}
      >
        <img className="md:w-1/2" src={login} alt="" />
        <form onSubmit={handleSignUp} className="md:w-2/3 text-black space-y-3">
          <h1 className="text-2xl text-black font-semibold uppercase"> Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Name"
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Type here"
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control pt-4">
            <button className="btn bg-[#D1A054]">Sign up</button>
          </div>
          <div className="space-y-3">
            <div className="text-[#D1A054]">
              Already registered?{" "}
              <Link to="/login" className="font-medium">
                Go to Login
              </Link>
            </div>
            <p>Or Sign in with</p>
            <div className="flex justify-center gap-4 text-2xl">
              <CiFacebook />
              <FcGoogle />
              <VscGithub />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
