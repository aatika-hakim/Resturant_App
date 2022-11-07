import Image from "next/image";
import React from "react";
import Map from "./Map";

const section4 = () => {
  return (
    <div>
      <Map />
      <Image src="./meat.svg" alt="meat" height="200" width="300" />
    </div>
  );
};

export default section4;
