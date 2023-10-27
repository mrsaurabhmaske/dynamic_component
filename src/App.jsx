import { useState } from "react";
import { Box } from "./Components/Box";
import { InputHandler } from "./Components/InputHandler";
import styled from "styled-components";

function App() {
  const [properties, setProperties] = useState({
    appBgColor: "white",
    boxColor: "white",
    width: "200px",
    height: "200px",
    padding: "0px",
    color: "black",
  });

  console.log(properties);

  return (
    <APP className="App" props={properties}>
      <Box properties={properties} />
      <InputHandler setProperties={setProperties} properties={properties} />
    </APP>
  );
}

export default App;

const APP = styled.div`
  background-color: ${(props) => props.props.appBgColor};
  color: ${(props) => props.color};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
`;
