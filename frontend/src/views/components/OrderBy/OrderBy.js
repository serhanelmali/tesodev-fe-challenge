import { useState } from "react";
import OrderIcon from "../../../assets/order.png";
import "./orderby.scss";

const OrderBy = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="order__container">
        <button className="order__button" onClick={() => clickHandler()}>
          <img src={OrderIcon} />
          <span>Order By</span>
        </button>
        {isClicked && (
          <div className="order__options">
            <ul>
              <li>Name ascending</li>
              <li>Name descending</li>
              <li>Year ascending</li>
              <li>Year descending</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderBy;
