import { useEffect, useState } from "react";
import GiftInput from "../GiftInput/GiftInput";
import GiftList from "../GiftList/GiftList";
import "./ListContainer.css";
// const listGifts = [
//   { id: 1, title: "Reloj Nono", amount: 1 },
//   { id: 2, title: "Remera Vicky", amount: 1 },
//   { id: 3, title: "Manga Nacho", amount: 1 },
// ];

const ListContainer = () => {
  const [gifts, setGifts] = useState([]);
  const [idHash, setIdHash] = useState(gifts.length + 1);

  useEffect(() => {
    if (localStorage.getItem("localList")) {
      setGifts(JSON.parse(localStorage.getItem("localList")));
      setIdHash(parseInt(localStorage.getItem("localId")));
    }
  }, []);
  useEffect(() => {
    const localList = JSON.stringify(gifts);
    localStorage.setItem("localList", localList);
    localStorage.setItem("localId", idHash);
  }, [gifts]);

  const addGift = (newGift, amount, giftUrl) => {
    if (
      gifts.some(
        (element) => element.title.toUpperCase() === newGift.toUpperCase()
      )
    ) {
      let giftsRefesh = [...gifts];
      let indexGift = gifts.findIndex(
        (element) => element.title.toUpperCase() === newGift.toUpperCase()
      );
      giftsRefesh[indexGift].amount += amount;
      if (giftUrl !== "") giftsRefesh[indexGift].url = giftUrl;
      setGifts(giftsRefesh);
      return;
    }
    let newid = idHash;
    setIdHash(newid + 1);
    setGifts([
      ...gifts,
      {
        id: newid,
        title: newGift,
        amount: amount,
        url: giftUrl,
      },
    ]);
  };

  const removeGifts = (id) => {
    const newListGift = gifts.filter((gift) => gift.id !== id);
    setGifts(newListGift);
  };
  const handleDeleteAll = () => {
    setGifts([]);
    setIdHash(1);
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
