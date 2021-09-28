import { gsap, Power3 } from "gsap";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Image from "./Image";
import "./App.css";

// import header, content, images components

function App() {
  let timeline = new gsap.timeline();
  let ease = Power3.easeOut;

  return (
    <div className="hero">
      <Header timeline={timeline} ease={ease} />
      <div className="container">
        <Content timeline={timeline} />
        <Image timeline={timeline} ease={ease} />
      </div>
    </div>
  );
}

export default App;
