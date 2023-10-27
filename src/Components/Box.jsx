import styled from "styled-components";

export const Box = ({ properties }) => {
  return (
    <StyledBox properties={properties} className="Box">
      <h1>Dynamic</h1>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  background-color: ${(props) => props.properties.bgColor};
  padding: ${(props) => props.properties.padding};
  width: ${(props) => props.properties.width};
  height: ${(props) => props.properties.height};
`;
