import { useState } from "react";
import { useAppContext } from "../../../context/store";
import OrderIcon from "../../../assets/order.png";
import "./orderby.scss";

const OrderBy = () => {
  const { setSortValue } = useAppContext();
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="order__container">
        <button className="order__button" onClick={() => clickHandler()}>
          <img src={OrderIcon} alt="Order Icon" />
          <span>Order By</span>
        </button>

        <div
          className="order__options"
          style={isClicked ? { opacity: 1 } : { opacity: 0 }}
        >
          <ul>
            <li onClick={() => setSortValue("nameA")}>Name ascending</li>
            <li onClick={() => setSortValue("nameD")}>Name descending</li>
            <li onClick={() => setSortValue("yearA")}>Year ascending</li>
            <li onClick={() => setSortValue("yearD")}>Year descending</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrderBy;
