import React from "react";
import { Circles } from "react-loader-spinner";

const Loader: React.FC = () => (
  <div className="loader-container">
    <Circles color="#ff0000" height={100} width={100} />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;