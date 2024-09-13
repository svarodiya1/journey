import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login succesfully");
          setTimeout(() => {
            document.getElementById("my_modal_3").close();
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        } else if (err.request) {
          alert("No response from server. Please try again later.");
        } else {
          alert("Request error: " + err.message);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box  dark:bg-slate-950 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your mail"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-950 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  * This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-950 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  * This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-blue-800 text-white rounded-md px-3 py-1 hover:bg-blue-600 duration-200">
                Login
              </button>
              <p>
                Not register?
                <Link
                  to="/signup"
                  className="underline text-blue-400 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
