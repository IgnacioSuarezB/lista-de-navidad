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
    console.log(gifts.find((element) => element.title === newGift));
    if (
      gifts.some(
        (element) => element.title.toUpperCase() === newGift.toUpperCase()
      )
    )
      return;
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
  const handleDeleteAll = () => {
    setGifts([]);
  };
  return (
    <div className="container">
      <h1>Lista de Navidad 🎁</h1>
      <GiftInput addGift={addGift} />
      {gifts.length === 0 ? (
        <p>No hay regalos, solo carbón</p>
      ) : (
        <GiftList listGifts={gifts} removeGifts={removeGifts} />
      )}
      <button
        onClick={() => {
          handleDeleteAll();
        }}
        id="btnDelete"
      >
        Eliminar todos los regalos
      </button>
    </div>
  );
};

export default ListContainer;
