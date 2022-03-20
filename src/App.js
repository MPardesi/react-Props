import React from "react";
import "./style.css";
import Self from "./Self.js";

export default function App() {
  const setname="pi";
  return (
    <div>
      <Self name={setname}/>
    </div>
  );
}
