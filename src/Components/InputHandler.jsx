import styled from "styled-components";

export const InputHandler = ({ setProperties, properties }) => {
  return (
    <INPUT_HANDLER className="InputHandler" props={properties}>
      <input
        type="text"
        placeholder="Enter Background Color"
        onChange={(e) =>
          setProperties((prev) => ({ ...prev, boxColor: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Enter Text Color"
        onChange={(e) =>
          setProperties((prev) => ({ ...prev, color: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Enter Width"
        onChange={(e) =>
          setProperties((prev) => ({ ...prev, width: `${e.target.value}px` }))
        }
      />
      <input
        type="text"
        placeholder="Enter Height"
        onChange={(e) =>
          setProperties((prev) => ({ ...prev, height: `${e.target.value}px` }))
        }
      />
      <input
        type="text"
        placeholder="Enter Padding"
        onChange={(e) =>
          setProperties((prev) => ({ ...prev, padding: `${e.target.value}px` }))
        }
      />
      <button
        className="toggle"
        onClick={() =>
          setProperties((prev) => ({
            ...prev,
            appBgColor: prev.appBgColor === "white" ? "black" : "white",
          }))
        }
      >
        Toggle Theme
      </button>
    </INPUT_HANDLER>
  );
};

const INPUT_HANDLER = styled.div`
  background-color: ${(props) => props.props.appBgColor};
  padding: 10px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  position: fixed;
  bottom: 0;

  input {
    padding: 15px;
    border-radius: 10px;
    border: none;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
    background-color: transparent;
    color: ${(props) =>
      props.props.appBgColor == "black" ? "yellow" : "black"};
    outline: 1px solid
      ${(props) => (props.props.appBgColor == "black" ? "white" : "none")};
  }

  .toggle {
    padding: 15px;
    border-radius: 10px;
    border: none;
    background-color: rgb(119, 171, 219);
    color: white;
    font-size: 1.1rem;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    outline: 1px solid
      ${(props) => (props.props.appBgColor == "black" ? "white" : "none")};
  }
  .toggle:hover {
    background-color: rgb(102, 141, 179);
  }

  .toggle:active {
    background-color: rgb(179, 102, 102);
    scale: 0.9;
  }
`;
