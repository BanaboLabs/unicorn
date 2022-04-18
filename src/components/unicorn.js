import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundMain from "./individual/background";
import Draggable from "react-draggable";
import asset1 from "../images/asset1.svg";
import asset2 from "../images/asset2.svg";
import asset3 from "../images/asset3.svg";
import asset4 from "../images/asset4.svg";
import asset5 from "../images/asset5.svg";
import asset6 from "../images/asset6.svg";
import asset7 from "../images/asset7.svg";
import asset8 from "../images/asset8.svg";
import asset9 from "../images/asset9.svg";
import applynowbutton from "../images/applynowbutton.svg";
import buynowbutton from "../images/buynowbutton.svg";
import blackdragger1 from "../images/blackdragger1.svg";
import greendragger3 from "../images/greendragger3.svg";
import reddragger5 from "../images/reddragger5.svg";
import whitedragger6 from "../images/whitedragger6.svg";
import clickme from "../images/clickme.png";
import bitcoin from "../images/bitcoin.svg";
import goldenegg from "../images/goldenegg.png";
import eastereggfound from "../images/eastereggfound.svg";
import useSound from "use-sound";
import theMusic from "./music.mp3";

export default function Unicorn() {
  const [eggClicked, setEggClicked] = useState(false);
  const [showEgg, setShowEgg] = useState(false);
  const [play] = useSound(theMusic);

  useEffect(() => {
    var delayInMilliseconds = 20000; //20 seconds
    setTimeout(function () {
      setShowEgg(true);
    }, delayInMilliseconds);
  }, []);

  useEffect(() => {
    var delayInMilliseconds = 6000; //6 seconds
    setTimeout(function () {
      setShowEgg(false);
    }, delayInMilliseconds);
  }, [eggClicked]);

  // Desktop - Need to disable y axis scroll
  // Mobile - Need to disable x axis scroll

  return (
    <RelativeDiv>
      <Draggable handle=".handle">
        <AbsoluteDiv1>
          <Asset1 src={asset1} />
          <ApplyNowButton1
            onClick={() =>
              window.open("https://k973mw5hw1q.typeform.com/to/oYqu9JgN")
            }
            src={applynowbutton}
          ></ApplyNowButton1>
          <BlackDragger1 className="handle" src={blackdragger1} />
        </AbsoluteDiv1>
      </Draggable>
      <Draggable handle=".handle">
        <AbsoluteDiv2>
          <Asset2 src={asset2} />
          <BlackDragger2 className="handle" src={blackdragger1} />
        </AbsoluteDiv2>
      </Draggable>
      <Draggable handle=".handle">
        <AbsoluteDiv3>
          <Asset3 src={asset3} />
          <GreenDragger3 className="handle" src={greendragger3} />
        </AbsoluteDiv3>
      </Draggable>
      <Draggable handle=".handle">
        <AbsoluteDiv4>
          <Asset4 src={asset4} />
          <BlackDragger4 className="handle" src={blackdragger1} />
        </AbsoluteDiv4>
      </Draggable>
      <Draggable handle=".handle">
        <AbsoluteDiv5>
          <Asset5 src={asset5} />
          <RedDragger5 className="handle" src={reddragger5} />
        </AbsoluteDiv5>
      </Draggable>
      <Draggable handle=".handle">
        <AbsoluteDiv6>
          <Asset6 src={asset6} />
          <WhiteDragger6 className="handle" src={whitedragger6} />
        </AbsoluteDiv6>
      </Draggable>
      <Draggable handle=".handle">
        <AbsoluteDiv7>
          <Asset7 src={asset7} />
          <BlackDragger7 className="handle" src={blackdragger1} />
        </AbsoluteDiv7>
      </Draggable>
      <Draggable handle=".handle">
        <AbsoluteDiv8>
          <Asset8 src={asset8} />
          <BuyNowButton1
            onClick={() => window.open("https://opensea.io/explore-solana")}
            src={buynowbutton}
          ></BuyNowButton1>
          <WhiteDragger8 className="handle" src={whitedragger6} />
        </AbsoluteDiv8>
      </Draggable>
      <Draggable handle=".handle">
        <AbsoluteDiv9>
          <Asset9 src={asset9} />
          <WhiteDragger9 className="handle" src={whitedragger6} />
        </AbsoluteDiv9>
      </Draggable>
      {showEgg ? (
        <AbsoluteDiv10>
          {eggClicked ? <EggFound src={eastereggfound} /> : null}
          {eggClicked ? (
            <Asset11 onClick={() => setEggClicked(true)} src={goldenegg} />
          ) : (
            <Asset10
              onClick={() => {
                var delayInMilliseconds = 1000; //1 second
                setTimeout(function () {
                  setEggClicked(true);
                }, delayInMilliseconds);
                play();
              }}
              src={goldenegg}
            />
          )}
        </AbsoluteDiv10>
      ) : null}
      <BackgroundMain />
    </RelativeDiv>
  );
}

const RelativeDiv = styled.div`
  position: relative;
  cursor: url(${bitcoin}), auto;
  overflow-x: hidden;
`;

const AbsoluteDiv1 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset1 = styled.img`
  position: absolute;
  top: 40px;
  left: 60px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 40px;
    left: 60px;
    width: 80vw;
    height: auto;
  }
`;

const ApplyNowButton1 = styled.img`
  position: absolute;
  top: 330px;
  left: 105px;
  cursor: url(${clickme}), auto;
  @media (max-width: 800px) {
    top: 290px;
    left: 100px;
    width: 70vw;
    height: auto;
  }
`;

const BlackDragger1 = styled.img`
  position: absolute;
  top: 60px;
  left: 425px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 60px;
    left: 428px;
  }
`;

const AbsoluteDiv2 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset2 = styled.img`
  position: absolute;
  top: 600px;
  left: 60px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 570px;
    left: 60px;
    width: 80vw;
    height: auto;
  }
`;

const BlackDragger2 = styled.img`
  position: absolute;
  top: 620px;
  left: 425px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 590px;
    left: 425px;
  }
`;

const AbsoluteDiv3 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset3 = styled.img`
  position: absolute;
  top: 40px;
  left: 548px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 970px;
    left: 60px;
    width: 80vw;
    height: auto;
  }
`;

const GreenDragger3 = styled.img`
  position: absolute;
  top: 52px;
  left: 827px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 985px;
    left: 420px;
  }
`;

const AbsoluteDiv4 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset4 = styled.img`
  position: absolute;
  top: 440px;
  left: 548px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 1440px;
    left: 60px;
    width: 80vw;
    height: auto;
  }
`;

const BlackDragger4 = styled.img`
  position: absolute;
  top: 460px;
  left: 748px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 1460px;
    left: 420px;
  }
`;

const AbsoluteDiv5 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset5 = styled.img`
  position: absolute;
  top: 40px;
  left: 938px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 2190px;
    left: 60px;
    width: 80vw;
    height: auto;
  }
`;

const RedDragger5 = styled.img`
  position: absolute;
  top: 55px;
  left: 1208px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 2215px;
    left: 420px;
  }
`;

const AbsoluteDiv6 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset6 = styled.img`
  position: absolute;
  top: 520px;
  left: 850px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 2790px;
    left: 60px;
    width: 80vw;
    height: auto;
  }
`;

const WhiteDragger6 = styled.img`
  position: absolute;
  top: 530px;
  left: 1190px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 2800px;
    left: 420px;
  }
`;

const AbsoluteDiv7 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset7 = styled.img`
  position: absolute;
  top: 700px;
  left: 850px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    display: none;
  }
`;

const BlackDragger7 = styled.img`
  position: absolute;
  top: 715px;
  left: 1310px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    display: none;
  }
`;

const AbsoluteDiv8 = styled.div`
  position: absolute;
  z-index: 50;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Asset8 = styled.img`
  position: absolute;
  top: 40px;
  left: 1300px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 2980px;
    left: 60px;
    width: 80vw;
    height: auto;
  }
`;

const BuyNowButton1 = styled.img`
  position: absolute;
  top: 492px;
  left: 1500px;
  cursor: url(${clickme}), auto;
`;

const WhiteDragger8 = styled.img`
  position: absolute;
  top: 58px;
  left: 1675px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 3000px;
    left: 410px;
  }
`;

const AbsoluteDiv9 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset9 = styled.img`
  position: absolute;
  top: 700px;
  left: 1400px;
  font-size: 40px;
  color: red;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 2980px;
    left: 60px;
    width: 80vw;
    height: auto;
    display: none;
  }
`;

const WhiteDragger9 = styled.img`
  position: absolute;
  top: 720px;
  left: 1690px;
  cursor: move;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    top: 3000px;
    left: 370px;
    display: none;
  }
`;

const AbsoluteDiv10 = styled.div`
  position: absolute;
  z-index: 50;
`;

const Asset10 = styled.img`
  width: 60px;
  height: auto;
  position: absolute;
  top: 580px;
  left: 1230px;
  cursor: url(${clickme}), auto;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Asset11 = styled.img`
  width: 60px;
  height: auto;
  position: absolute;
  top: 580px;
  left: 1230px;
  cursor: url(${clickme}), auto;
  @-moz-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* IE */
  @-ms-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* Opera and prob css3 final iteration */
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  -moz-animation: blink normal 1.5s infinite ease-in-out; /* Firefox */
  -webkit-animation: blink normal 1.5s infinite ease-in-out; /* Webkit */
  -ms-animation: blink normal 1.5s infinite ease-in-out; /* IE */
  animation: blink normal 1.5s infinite ease-in-out; /* Opera and prob css3 final iteration */
  @media (max-width: 800px) {
    display: none;
  }
`;

const EggFound = styled.img`
  width: 300px;
  height: auto;
  position: absolute;
  top: 480px;
  left: 1120px;
  cursor: url(${clickme}), auto;
  @-moz-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* IE */
  @-ms-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* Opera and prob css3 final iteration */
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  -moz-animation: blink normal 1.5s infinite ease-in-out; /* Firefox */
  -webkit-animation: blink normal 1.5s infinite ease-in-out; /* Webkit */
  -ms-animation: blink normal 1.5s infinite ease-in-out; /* IE */
  animation: blink normal 1.5s infinite ease-in-out; /* Opera and prob css3 final iteration */
  @media (max-width: 800px) {
    display: none;
  }
`;
