import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const AboutPage = () => {
  const aboutTitle = useSelector((state) => state.aboutTitle);

  return (
    <div>
      <h1>{aboutTitle}</h1>
    </div>
  );
};

export default AboutPage;
