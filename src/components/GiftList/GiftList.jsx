import "./GiftList.css";
const GiftList = ({ listGifts, removeGifts }) => {
  return (
    <ul>
      {listGifts.map((gift) => (
        <li key={gift.id}>
          <div className="divLi">
            <span>
              {gift.title} x {gift.amount}
            </span>
            <button className="delete" onClick={() => removeGifts(gift.id)}>
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GiftList;
