import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItems } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    //dispatch(removeItems()); //removed last added means pop  as i wrote reducer function
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-5 p-10">
      {cartItems.length === 0 && <h1>yr card is Empty</h1>}
      <div className="text-center text-xl">cart</div>
      <div>
        <button className="border-2" onClick={handleClearCart}>
          ClearCart
        </button>
      </div>
      {cartItems.map((item) => (
        <div
          key={item.card.info.id}
          className="border-4 m-0.5 p-4 w-6/12  m-auto"
        >
          <ItemList item={item} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
