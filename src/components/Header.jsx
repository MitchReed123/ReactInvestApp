import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
const Header = (props) => {
  return (
    <div>
      <Marquee speed={150} gradient={false} pauseOnClick direction="left">
        <h1 style={{ paddingRight: "10px" }}>DogeCoin</h1>
        <h1 style={{ paddingRight: "10px" }}>Bitcoin</h1>
        <h1 style={{ paddingRight: "10px" }}>Litecoin</h1>
        <h1 style={{ paddingRight: "10px" }}>BTV</h1>
      </Marquee>
    </div>
  );
};

export default Header;
