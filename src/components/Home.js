import React from "react";
import { name, city } from "../data/data.js";

const divstyle = {
  color: 'firebrick'
}

function Home() {
  // update the JSX being returned!
  return (
    <div id = "home">
      <h1 style ={divstyle}>Your {name} is a Web Developer from Your {city}</h1>
    </div>
  
  );
  
}

export default Home;
