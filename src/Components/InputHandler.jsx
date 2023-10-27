export const InputHandler = ({ setProperties }) => {
  return (
    <div className="InputHandler">
      <label htmlFor="bgColor"></label>
      <input
        type="text"
        placeholder="Enter Background Color"
        onChange={(e) =>
          setProperties((prev) => ({ ...prev, bgColor: e.target.value }))
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
    </div>
  );
};
