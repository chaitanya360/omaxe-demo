import logo from "./logo.svg";
import "./App.css";
import { PathStyle, PlanStyle } from "./app.style";
import tippy, { createSingleton } from "tippy.js";
import HoverInfo from "./HoverInfo";
import ReactDOMServer from "react-dom/server";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Iso from "./Iso";

const paths = {
  0: {
    1: "M202 712V549H260V771H227V712H202Z",
    2: "M304 575V402.5H417.5V575H304Z",
    3: "M463.5 573.5V400L578 402.5V573.5H463.5Z",
    4: "M941 574.5V401H1056.5V574.5H941Z",
    5: "M1169.5 547.5V462H1316.5V684.5H1262V710.5H1241.5V769.5H1103.5V547.5H1169.5Z",
    6: "M463.5 981V911H523V924.5H690.5V981H463.5Z",
    7: "M463.5 866V723.5H578.5V852.5H523.5V866H463.5Z",
    8: "M783 573.5V401.5H897V573.5H783Z",
    9: "M677.5 684.5V626H737V741H689.5V852H623V684.5H677.5Z",
    10: "M623 574V402H737V574H623Z",
    11: "M942.5 854V724H1056V864.5H995.5V854H942.5Z",
    12: "M203 712V548.5H260.5V769.5H228.5V712H203Z",
    13: "M304.5 823V626H416.5V823H304.5Z",
    14: "M304.5 863V823H418V866L304.5 863Z",
    15: "M203 982V910H419.5V982H203Z",
    16: "M783 740.5V627L840.5 625.5L842 685.5H895.5V852H829.5V740.5H783Z",
    17: "M945 979.5V925H997V912H1056V979.5H945Z",
    18: "M1316 350.5V461.5H1261.5V350.5H1316Z",
    19: "M1102.5 545V401.5H1163.5V404H1217V463H1169V545H1102.5Z",
    20: "M866.5 293.5V206.5H1025.5V293.5H866.5Z",
    21: "M683 294.5V208.5H866.5V294.5H683Z",
    22: "M277.5 232.5L275.5 212.5H576V293L266.5 296V251H271V232.5H277.5Z",
    23: "M1104 865.5V767.5H1217.5V865.5H1104Z",
    24: "M1101.5 912H1315V981H1101.5V912Z",
  },
  1: {
    23: "M1241 1059V978L1359 978.5V981H1420V1059H1359.5V1038.5H1301.5V1059H1241Z",
    22: "M626 1063L629 1006.5H715.5L734 1025.5V1040.5H737.5V1058.5L730 1070.5H711.5V1063H626Z",
    21: "M842.5 241.5V172.5H1086.5V271.5H935.5V233H905.5V271.5H874V241.5H842.5Z",
    20: "M144 1061V978L510 978.5V995H628V1039.5H574L572.5 1059H443.5V1039.5H389V1061H259V1039.5H207.5V1061H144Z",
    19: "M693 242.5V173H817.5V242.5H693Z",
    18: "M172.5 924V840H207V924H172.5Z",
    17: "M144.5 753.5V563.5H207.5V820H172.5V753.5H144.5Z",
    16: "M442.5 926.5V763L574.5 764.5L573.5 911.5H513V926.5H442.5Z",
    15: "M258.5 927.5V652H391.5V927.5H258.5Z",
    14: "M863 880V786L809 783.5V655.5H875.5V717.5H938.5V880H863Z",
    13: "M686.5 720V655.5H756.5V785.5H702.5V881H626V720H686.5Z",
    12: "M1176 925.5V847.5H1307V925.5H1176Z",
    11: "M1175 847V464.5H1245V563.5H1305.5V482C1341.44 521.659 1364.66 530.55 1411 525H1420.5V719H1335.5V847H1175Z",
    10: "M1175 464V394H1245.5V464H1175Z",
    9: "M136 403V239.5H159.5C182.729 282.269 202.669 298.739 254 311V342H207.5V396H144.5V403H136Z",
    8: "M259 592.5L261 394.5H390.5V592.5H259Z",
    7: "M441.5 591.5V395H574V591.5H441.5Z",
    6: "M626 593V395.5H695V432.5H756.5V593H626Z",
    5: "M808 593V430.5H869.5V395H940.5V593H808Z",
    4: "M992.5 592.5V395H1122.5V592.5H992.5Z",
    3: "M992 764H1122.5V927H1054V912H992V764Z",
    2: "M572.5 172.5H501C512.792 219.731 503.001 239.041 481 271.5H572.5V172.5Z",
    1: "M932 1032V994.5H1053V978.5H1241L1239 1059H1174.5V1038H1122V1061.5H993V1032H932Z",
  },
};

const tippySetups = (planId) => {
  setTimeout(() => {
    let tippyInstances = [];

    Object.keys(paths[planId]).map((path) => {
      console.log(`#plan${planId}path${path}`);
      const tippyInstance = tippy(`#plan${planId}path${path}`, {
        content: ReactDOMServer.renderToStaticMarkup(
          <HoverInfo
            title={`Area No. ${path}`}
            features={["10 units", "2234 - 25234 Sq.ft"]}
          />
        ),
      });
      tippyInstances.push(tippyInstance[0]);
    });

    createSingleton(tippyInstances, {
      delay: 0,
      arrow: false,
      moveTransition: "transform 0.1s ease-out",
      allowHTML: true,
      placement: "left-start",
      duration: [0, 600],
      offset: [-40, 30],
    });
  }, 50);
};

function Plan() {
  const { planId } = useParams();
  const [showIso, setShowIso] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      tippySetups(planId);
    }, 1000);
  }, []);
  return (
    <PlanStyle>
      {showIso && <Iso onClick={() => setShowIso(false)} />}
      <svg
        width="auto"
        height="100%"
        viewBox="0 0 1484 1110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Group 1">
          <image
            href={`${process.env.PUBLIC_URL}/${planId}.jpg`}
            className="image"
          />

          {Object.keys(paths[planId]).map((path) => (
            <PathStyle
              className="plan-path"
              id={`plan${planId}path${path}`}
              d={paths[planId][path]}
              onClick={() => setShowIso((old) => !old)}
            />
          ))}
        </g>
      </svg>
    </PlanStyle>
  );
}

export default Plan;
