import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBanner from "../../assets/others/authentication.png";
import login from "../../assets/others/authentication2.png";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser, profileUpdate, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        profileUpdate(data.name)
          .then((result) => {
            Swal.fire({
              title: "Success!",
              text: "Successfully Sign up",
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate("/login");
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="hero min-h-screen " style={{ backgroundImage: `url(${loginBanner})` }}>
      <div
        className="hero-content flex-col md:flex-row-reverse  justify-between items-center md:gap-20  md:p-20   my-5 md:my-20 text-center text-neutral-content w-11/12 md:w-10/12 mx-auto  border-2 border-slate-300 shadow-2xl"
        style={{ backgroundImage: `url(${loginBanner})` }}
      >
        <img className="md:w-1/2" src={login} alt="" />
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 text-black space-y-3">
          <h1 className="text-2xl text-black font-semibold uppercase"> Sign Up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter Name"
              className="input input-bordered "
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600 text-start text-sm" role="alert">
                Name is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Type here"
              className="input input-bordered "
            />
            {errors.email && (
              <p className="text-red-600 text-start text-sm" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/,
              })}
              placeholder="Enter your password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600 text-start text-sm" role="alert">
                Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 text-start text-sm" role="alert">
                Password must be 6 character long
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600 text-start text-sm" role="alert">
                Password must be less than 20 character long
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 text-start text-sm" role="alert">
                Password must have one lower case, one uppercase, one number and one special
                character
              </p>
            )}
          </div>
          <p className="text-red-500">{error}</p>
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
            <p>Or Sign up with</p>
            <div className="flex justify-center gap-4 text-2xl">
              <CiFacebook className="cursor-pointer" />
              <FcGoogle className="cursor-pointer" onClick={handleGoogleSignIn} />
              <VscGithub className="cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
