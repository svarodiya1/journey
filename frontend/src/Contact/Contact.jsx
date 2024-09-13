import React from "react";
import Navbar from "../componenets/Navbar";

const Contact = () => {
  return (
    <>
    < Navbar/>
      <div className="flex h-screen justify-center items-center">
        <div id="my_modal_3" className="w-[600px] ">
          <div className="modal-box dark:bg-slate-950 dark:shadow-xl dark:shadow-white dark:text-white">
            <h1 className="font-bold text-5xl flex justify-center items-center">Contact us</h1>
            <div className="mt-4 space-y-2">
              <span className="text-2xl">Name</span>
              <br />
              <input
                type="text"
                placeholder="enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-950 dark:text-white"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span className="text-2xl">Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your mail"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-950 dark:text-white"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span className="text-2xl">How we help you ?</span>
              <br />
              <textarea
              
                type="text"
                placeholder="Enter yoy Quiry"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-950 dark:text-white"
              />
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-blue-800 text-white font-bold rounded-md px-3 py-3 hover:bg-blue-600 duration-200">
               Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
