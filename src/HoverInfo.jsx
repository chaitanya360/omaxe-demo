import React from "react";
import styled from "styled-components";

const HoverInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: tomato;
  /* background-color: var(--clr-orange-light); */
  color: white;
  padding: 1rem;
  padding-right: 2.5rem;
  border-radius: 8px;

  .title {
    padding-left: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    border-left: 4px solid var(--clr-orange);
    font-family: "Marcellus", serif;
  }

  .features {
    /* temp comment remove this */
    font-family: "Lato", sans-serif;
    margin-top: 0.6rem;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    div {
      padding: 0.2rem 0.5rem;
    }
  }
`;

const Title = ({ title }) => <div className="title">{title}</div>;

const Features = ({ features }) => (
  <div className="features">
    {features.map((feature) => (
      <div key={feature}>{feature}</div>
    ))}
  </div>
);

function HoverInfo({ title = "", features = [] }) {
  return (
    <HoverInfoStyle>
      <Title title={title} />
      <Features features={features} />
    </HoverInfoStyle>
  );
}

export default HoverInfo;
