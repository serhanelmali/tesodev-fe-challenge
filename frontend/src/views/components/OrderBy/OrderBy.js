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
          <img src={OrderIcon} />
          <span>Order By</span>
        </button>
        {isClicked && (
          <div className="order__options">
            <ul>
              <li>Name ascending</li>
              <li>Name descending</li>
              <li onClick={() => setSortValue("yearA")}>Year ascending</li>
              <li onClick={() => setSortValue("yearB")}>Year descending</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderBy;
