import React from "react";
import BusinessDescription from "../Component/BusinessDescription/BusinessDescription";
import BusinessVision from "../Component/BusinessDescription/BusinessVision";
const Introduction = () => {
  return (
    <section className="introduction light-grey">
      <BusinessVision />
      <BusinessDescription />
    </section>
  );
};

export default Introduction;
