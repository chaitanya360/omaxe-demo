import styled from "styled-components";

export const PathStyle = styled.path`
  fill: transparent;
  outline: 0px solid transparent;
  cursor: pointer;
  fill-opacity: 0;
  transition: all 150ms linear;

  :hover {
    fill: rgba(0, 255, 0, 1);
    fill-opacity: 0.5;
    stroke: black;
    stroke-width: 2px;
  }
`;

export const PlanStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  svg {
    height: 90%;
  }
  path {
    stroke: red;
    stroke-width: 2px;
  }
`;
