import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4 ">
        Hello This is Contact Page...
      </h1>
      <form className="">
        <input
          className=" p-2 m-2 border border-gray-400 outline-none rounded-md "
          placeholder="name"
        />
        <input
          className=" p-2 m-2 border border-gray-400 outline-none rounded-md "
          placeholder="message"
        />
        <button className=" bg-slate-800 text-white p-2 m-2 border border-gray-400 outline-none rounded-md " >Submit</button>
      </form>
    </div>
  );
};

export default Contact;
