import styled from "styled-components";

export const PathStyle = styled.path`
  fill: transparent;
  outline: 0px solid transparent;
  cursor: pointer;
  fill-opacity: 0;
  transition: all 150ms linear;

  :hover {
    fill: rgba(0, 255, 0, 1);
    fill-opacity: 0.2;
    stroke: black;
  }
`;
