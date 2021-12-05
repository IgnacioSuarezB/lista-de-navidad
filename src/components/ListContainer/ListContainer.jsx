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
  const [idHash, setIdHash] = useState(gifts.length + 1);
  console.log(gifts);
  const addGift = (newGift) => {
    let newid = idHash;
    setIdHash(newid + 1);
    setGifts([
      ...gifts,
      {
        id: newid,
        title: newGift,
      },
    ]);
    console.log(gifts);
  };
  const removeGifts = (id) => {
    const newListGift = gifts.filter((gift) => gift.id !== id);
    setGifts(newListGift);
  };
  return (
    <div className="container">
      <h1>Lista de Navidad 🎁</h1>
      <GiftList listGifts={gifts} removeGifts={removeGifts} />
      <GiftInput addGift={addGift} />
    </div>
  );
};

export default ListContainer;
