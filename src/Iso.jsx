import React from "react";
import { IsoStyle } from "./app.style";

function Iso({ onClick }) {
  return (
    <IsoStyle onClick={onClick}>
      <div className="body">
        <img src={`${process.env.PUBLIC_URL}/iso.png`} />
      </div>
    </IsoStyle>
  );
}

export default Iso;
