import React, { useEffect, useRef } from "react";
import "./App.css";
import sunImg from './imgs/sun.png'

function App() {
  const aliceSprite = useRef(null);
  const clouds = useRef(null);
  const tree = useRef(null);
  const bottle = useRef(null);

  useEffect(() => {

    var alice = aliceSprite.current.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
      {
        easing: "steps(7, end)",
        duration: 700,
        iterations: Infinity,
      }
    );

    setInterval(function () {
      if (alice.playbackRate > .4) {
        alice.playbackRate -= .1;
      }
    }, 3000);


    var skyClouds = clouds.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-4000px, 0)" },
      ],

      {
        duration: 100000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );


    var earthTree = tree.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-4000px, 0)" },
      ],
      {
        duration: 50000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );


    var earthBottle = bottle.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-4000px, 0)" },
      ],
      {
        duration: 50000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    )


    const goFaster = () => {
      alice.playbackRate += 0.1;
      earthTree.playbackRate += 0.1;
      earthBottle.playbackRate += 0.1
      skyClouds.playbackRate += 0.1;
    }

    window.addEventListener("click", goFaster);

  });


  return (
    <div className="container">
      <div className="sky">
        <div className="sun">
          <img src={sunImg} alt='sun img' />
        </div>
        <div className='cloud' ref={clouds}>
          <img
            className="cloud1"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
          <img
            className="cloud2"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
          <img
            className="cloud2"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
          <img
            className="cloud3"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
          <img
            className="cloud2"
            src="http://pngimg.com/uploads/cloud/cloud_PNG27.png"
          />
        </div>
      </div>

      <div className="earth">
        <div className="alice">
          <img
            className="alicesprite"
            ref={aliceSprite}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            alt=" "
          />
        </div>
      </div>
      <div ref={tree} className="tree">
        <img className='tree1' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" />
        <img className='tree2' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" />
        <img className='tree3' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" />
      </div>
      <div ref={bottle} className="bottle">
        <img className="bottle1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" />
        <img className="bottle2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" />
        <img className="bottle3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" />
        <img className="bottle2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" />
      </div>
    </div>
  );
}

export default App;
