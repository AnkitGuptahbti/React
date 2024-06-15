import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import ItemList from "./ItemList";
// import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // const img_URL=CDN_URL+

  if (resInfo === null) return <h1 className=" font-bold">Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  // console.log(itemCards);

  return (
    <div className="menu  m-auto  ">
      <h1 className=" text-2xl">{name}</h1>
      <p className="">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="text-xl"> Recommended Menu ⏬</h2>
      <ul className=" rec-menu-con">
        {itemCards.map((item) => (
          <div key={item.card.info.id} className="border-4 m-0.5 p-4 ">
            <ItemList item={item} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
