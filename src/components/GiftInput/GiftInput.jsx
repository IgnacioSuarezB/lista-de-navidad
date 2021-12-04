import { useState } from "react";
import "./GiftInput.css";

const GiftInput = ({ addGift }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addGift(input);
  };
  return (
    <form className="inputContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese el nuevo regalo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default GiftInput;
