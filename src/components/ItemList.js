import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdditem = (item) => {
    //dispatch an action
    // dispatch(addItems("pizza"));
    dispatch(addItems(item));
  };
  return (
    <div>
      <li className="flex flex-row justify-between space-x-4">
        <div>
          <div>{item.card.info.name}</div>
          <div>
            {" ₹-"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </div>
        </div>
        <div className="relative">
          <img
            className="res-logo w-48 h-48 object-cover"
            alt="res-logo"
            src={CDN_URL + item.card.info.imageId}
          />
          <button
            className="absolute top-2 right-2   bg-slate-400 bg-opacity-75 p-2 rounded"
            onClick={() => handleAdditem(item)}
          >
            Add+
          </button>
        </div>
      </li>
    </div>
  );
};
export default ItemList;
