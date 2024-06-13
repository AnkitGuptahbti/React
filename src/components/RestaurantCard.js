import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="res-logo w-full h-48 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <h4 className="text-gray-600 mb-2">{cuisines.join(", ")}</h4>
        <h4 className="text-yellow-500 font-medium mb-2">{avgRating} stars</h4>
        <h4 className="text-gray-700 font-medium mb-2">{costForTwo}</h4>
        <h4 className="text-green-600 font-medium">
          {sla.deliveryTime} minutes
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
