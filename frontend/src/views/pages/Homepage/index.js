import logo from "../../../assets/tesodevlogo.jpg";
import SearchButton from "../../components/Button/SearchButton";
import SearchInput from "../../components/SearchInput/SearchInput";

import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="container">
      <div className="container__top">
        <div className="container__top__wrapper">
          <img className="container__top__logo" src={logo} alt="Tesodev Logo" />
          <span className="container__top__text">Search web app</span>
        </div>
      </div>
      <div className="container__middle">
        <SearchInput />
        <SearchButton />
      </div>
      <div className="container__bottom"></div>
    </div>
  );
};

export default Homepage;
