import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

import loginBanner from "../../assets/others/authentication.png";
import login from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (event) => {
    event.preventDefault();
    const user_captcha_value = event.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    signIn(data.email, data.password)
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: "Successfully Sign in",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(from, { replace: true });
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
        className="hero-content flex-col md:flex-row  justify-between items-center md:gap-20  md:p-20    my-5 md:my-20 text-center text-neutral-content w-11/12 md:w-10/12 mx-auto  border-2 border-slate-300 shadow-2xl"
        style={{ backgroundImage: `url(${loginBanner})` }}
      >
        <img className="md:w-1/2" src={login} alt="" />
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 text-black space-y-2">
          <h1 className="text-2xl text-black font-semibold uppercase"> Sign In</h1>
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
              <p className="text-start text-red-600 text-sm" role="alert">
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
              {...register("password", { required: "Password is required " })}
              placeholder="Enter your password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-start text-red-600 text-sm" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="text-start w-3/4">
              <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handleValidateCaptcha}
              type="text"
              name="captcha"
              placeholder="Type captcha here"
              className="input input-bordered my-3"
            />
          </div>
          <p className="text-red-500">{error}</p>
          <div className="form-control mt-6">
            <button disabled={disable} className="btn bg-[#D1A054]">
              Sign in
            </button>
          </div>
          <div className="space-y-2">
            <div className="text-[#D1A054]">
              New here?{" "}
              <Link to="/register" className="font-medium">
                Create a New Account
              </Link>
            </div>
            <p>Or Sign in with</p>
            <div className="flex justify-center gap-4 text-2xl">
              <CiFacebook />
              <FcGoogle onClick={handleGoogleSignIn} />
              <VscGithub />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
