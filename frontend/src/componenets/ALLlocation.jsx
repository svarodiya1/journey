import React, { useEffect, useState } from "react";
import Card from "../componenets/Card"; 
import axios from "axios";
import { Link } from "react-router-dom";

const ALLlocation = () => {
  const [loca, setLoca] = useState([]);

  useEffect(() => {
    const getLoca = async () => {
      try {
        const res = await axios.get("http://localhost:4001/loca");
        console.log(res.data);
        setLoca(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLoca(); 
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-16 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-blue-800"> here :)</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ut
          quo aut adipisci voluptatum dolorem accusamus autem blanditiis est
          assumenda debitis necessitatibus consequuntur, quibusdam ab illo!
          Harum maxime dolores earum optio dicta laborum, ex voluptatum
          perspiciatis temporibus recusandae dolor, iure consequatur commodi
          quaerat quod consequuntur?
        </p>
        <Link to="/">
          <button className="btn btn-primary text-white mt-6 px-4 py-2 rounded-md">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Corrected gap-70 */}
        {loca.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ALLlocation;
