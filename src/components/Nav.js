import React from "react";
import logoImg from "../imgs/header-logo1.png";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 45px;
  padding: 0 20px;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
const RightDiv = styled.div`
  flex: 1;
`;

const UlDiv = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const H1_STYLE = {
  marginLeft: "10px",
  color: "#ff8800",
};

const ATAG_STYLE = {
  color: "hotpink",
  padding: "0 5px",
};

function Nav() {
  return (
    <FlexDiv>
      <LeftDiv>
        <img src={logoImg} width="30px" height="30px" />
        <strong style={H1_STYLE}>Dustin</strong>
      </LeftDiv>
      <RightDiv>
        <UlDiv>
          <li>
            <a href="#" style={ATAG_STYLE}>
              Download
            </a>
          </li>
          <li>
            <a href="#" style={ATAG_STYLE}>
              Logout
            </a>
          </li>
        </UlDiv>
      </RightDiv>
    </FlexDiv>
  );
}

export default Nav;
