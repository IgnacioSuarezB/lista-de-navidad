import { useState } from "react";
import "./GiftInput.css";

const GiftInput = ({ addGift }) => {
  const [giftName, setGiftName] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    addGift(giftName, amount);
  };
  return (
    <form className="inputContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese un nuevo regalo"
        value={giftName}
        onChange={(e) => {
          setGiftName(e.target.value);
        }}
        required
      />
      <span>X</span>
      <input
        type="number"
        className="input-number"
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default GiftInput;
