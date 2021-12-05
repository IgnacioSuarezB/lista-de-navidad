import "./GiftList.css";
const GiftList = ({ listGifts, removeGifts }) => {
  return (
    <ul>
      {listGifts.map((gift) => (
        <li key={gift.id}>
          <span>{gift.title}</span>
          <button className="delete" onClick={() => removeGifts(gift.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GiftList;
