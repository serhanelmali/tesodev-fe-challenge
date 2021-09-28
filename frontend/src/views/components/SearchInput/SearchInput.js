import { useAppContext } from "../../../context/store";
import "./searchInput.scss";

const SearchInput = () => {
  const isError = false;
  const errorText = "Error text";
  const store = useAppContext();
  const setSearchTerm = store.setSearchTerm;

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        className={
          !isError
            ? "search-container__input"
            : "search-container__input--error"
        }
        placeholder="Type a name/city/year/company/country"
        type="text"
        onChange={onChangeHandler}
      />

      <span
        className={
          !isError ? "search-container__text" : "search-container__text--error"
        }
      >
        {errorText}
      </span>
    </div>
  );
};

export default SearchInput;
