import React from "react";
import Nav from "./Nav";
import adsImg from "../imgs/header-logo2.png";
import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 45px;
  padding: 0 20px;
`;

function Home() {
  return (
    <>
      <Nav />
      <FlexDiv>
        <div>
          <h1>Dustin</h1>
          <h4>Full Stack Developer</h4>
          <button>Download Resume</button>
        </div>
        <div>
          <img src={adsImg} alt="ads" />
        </div>
      </FlexDiv>
    </>
  );
}

export default Home;
