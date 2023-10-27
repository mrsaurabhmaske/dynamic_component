import styled from "styled-components";

export const Box = ({ properties }) => {
  return (
    <StyledBox properties={properties} className="Box">
      <h1>Dynamic</h1>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  background-color: ${(props) => props.properties.boxColor || "white"};
  padding: ${(props) => props.properties.padding || "0px"};
  width: ${(props) => props.properties.width || "200px"};
  height: ${(props) => props.properties.height || "200px"};
  color: ${(props) => props.properties.color || "black"};
  position: fixed;
  top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 2px
    ${(props) => (props.properties.appBgColor == "black" ? "white" : "black")};
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
`;
