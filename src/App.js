import logo from "./logo.svg";
import "./App.css";
import { PathStyle } from "./app.style";
import tippy, { createSingleton } from "tippy.js";
import HoverInfo from "./HoverInfo";
import ReactDOMServer from "react-dom/server";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const tippySetups = () => {
  setTimeout(() => {
    let tippyInstances = [];

    const tippyInstance = tippy(`#floor0`, {
      content: ReactDOMServer.renderToStaticMarkup(
        <HoverInfo
          title={"Ground Floor"}
          features={["10 units", "1bkh , 2bhk", "1234 - 21234 Sq.ft"]}
        />
      ),
    });
    tippyInstances.push(tippyInstance[0]);

    const tippyInstance2 = tippy(`#floor1`, {
      content: ReactDOMServer.renderToStaticMarkup(
        <HoverInfo
          title={"1 st Floor"}
          features={["10 units", "2bkh , 3bhk", "2234 - 25234 Sq.ft"]}
        />
      ),
    });

    tippyInstances.push(tippyInstance2[0]);

    createSingleton(tippyInstances, {
      delay: 0,
      arrow: false,
      moveTransition: "transform 0.1s ease-out",
      allowHTML: true,
      placement: "top",
      duration: [0, 1000],
      offset: [-40, 30],
    });
  }, 50);
};

function App() {
  useEffect(() => {
    tippySetups();
  }, []);
  return (
    <div className="App">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 2460 1105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Group 1">
          <image
            href={`${process.env.PUBLIC_URL}/building.png`}
            className="image"
          />

          <Link to={"/plan/1"}>
            <PathStyle
              className="path"
              id="floor1"
              d="M316.946 380.75C315.451 373.764 313.346 363.929 300.5 358L368 257L398.5 255L417 223.5H455L453 204L446.5 201L468 163.5L557 162L570 140L567.5 117.5L561 115L582 72H603.5L605.5 67.5L1179.5 55.5L1183 40.5L1178 26.5L1179.5 21.5L1273.5 20L1280.5 38H1278V50.5L1587 43.5L1588 20L1585 16.5V10.5L1689.5 9L1712 30.5L1709.5 40L1839 36.5L2010 152L2077 150.5L2199.5 227L2190 232L2183 264L2297 341.5C2303.7 342.578 2287 344.5 2281 353.5L2234.5 518.5L2182.5 521L2185 527.5L2071 531L2062.5 520L1945 527.5L1949 535.5L1829.5 543L1821.5 533.5L1703.5 543L1709.5 550.5L1583.5 555.5L1575.5 543L1200 564V575L1069.5 578V569.5L942.5 575V588.5L805 592V581L677.5 585.5V598.5L538.5 602.5V593.5L478.5 598L474 584.5L362 587.5L317 381L316.946 380.75Z"
              // fill="#36E033"
              // fill-opacity="0.5"
            />
          </Link>
          <Link to={"/plan/0"}>
            <PathStyle
              className="path"
              id="floor0"
              d="M357.5 594C357.226 591.33 357.598 589.918 362 588L474 585.5L477.5 598L537.5 594V603L677.5 598.5V586L805 581.5L805.5 592.5L943 588V575L1069 570L1069.5 579L1200.5 576V564L1293.5 560.5L1487 547.5L1575.5 544L1582.5 555.5L1710 550.5L1704.5 543.5L1821.5 534L1828 543.5L1950 536L1945.5 527.5L2061 520.5L2070.5 531.5L2185.5 527.5L2183 521.5L2235 519.5L2204.5 635L635.5 719L565 721.5L392 731L365.5 604.5C361.019 601.058 359.235 598.773 357.5 594Z"
              // fill="#54E9FD"
              // fill-opacity="0.41"
            />
          </Link>
        </g>
      </svg>
    </div>
  );
}

export default App;
