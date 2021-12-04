import "./GiftList.css";
const GiftList = ({ listGifts }) => {
  return (
    <ul>
      {listGifts.map((gift) => (
        <li key={gift.id}>{gift.title}</li>
      ))}
    </ul>
  );
};

export default GiftList;
