import { useAppContext } from "../../../context/store";
import SearchBar from "../../layouts/SearchBar/SearchBar";
import SearchResults from "../../layouts/SearchResults/SearchResults";
import logo from "../../../assets/tesodevlogo.jpg";
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
      <div className="container__bottom">
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
};

export default Homepage;
