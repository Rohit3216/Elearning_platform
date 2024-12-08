import React from "react";
import { Link } from "react-router-dom";
import  {courses}  from "../../utility/coursedata";
import Card from "./Card";


const Coursecard = () => {
 

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Learners are viewing</h2>
      <div className="flex flex-wrap justify-start gap-6">
        {courses.map((course, index) => (
          <Card key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Coursecard;
