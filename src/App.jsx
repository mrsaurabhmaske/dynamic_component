import { useState } from "react";
import { Box } from "./Components/Box";
import { InputHandler } from "./Components/InputHandler";

function App() {
  const [properties, setProperties] = useState({
    bgColor: "",
    width: "",
    height: "",
    padding: "",
  });

  return (
    <div className="App">
      <Box properties={properties} />
      <InputHandler setProperties={setProperties} />
    </div>
  );
}

export default App;
