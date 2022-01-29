import "./Parallax.css";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Page = ({ offset, color }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${require("../img/sunny.png")})`,
          backgroundSize: "contain"
        }}
      >
        {" "}
        <h3>
          Scroll Horizontally to See the Parallax Effect{" "}
          <span role="img" aria-label="arrow-right">
            ➡️
          </span>
        </h3>
        <footer>
          <span>Made with</span>
          <a target="_blank" rel="noreferrer" href="https://react-spring.io">
            &nbsp;React-Spring
          </a>
          <div>
            Background Image from
            <a
              target="_blank"
              rel="noreferrer"
              href="https://undraw.co/illustrations"
            >
              &nbsp;unDraw
            </a>
          </div>
        </footer>
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text" offset={offset} speed={0.3}>
      <span>{offset + 1}</span>
    </ParallaxLayer>
  </>
);

export default function ParallaxComponent() {
  return (
    <div>
      <Parallax className="container" pages={3} horizontal>
        <Page offset={0} color="orange" />
        <Page offset={1} color="teal" />
        <Page offset={2} color="pink" />
      </Parallax>
    </div>
  );
}
