import { useState } from "react";
import GiftInput from "../GiftInput/GiftInput";
import GiftList from "../GiftList/GiftList";
import "./ListContainer.css";
const listGifts = [
  { id: 1, title: "Reloj Nono" },
  { id: 2, title: "Remera Vicky" },
  { id: 3, title: "Manga Nacho" },
];

const ListContainer = () => {
  const [gifts, setGifts] = useState(listGifts);
  console.log(gifts);
  const addGift = (newGift) => {
    let newid = gifts.length + 1;
    setGifts([
      ...gifts,
      {
        id: newid,
        title: newGift,
      },
    ]);
    console.log(gifts);
  };
  return (
    <div className="container">
      <h1>Lista de Navidad 🎁</h1>
      <GiftList listGifts={gifts} />
      <GiftInput addGift={addGift} />
    </div>
  );
};

export default ListContainer;
