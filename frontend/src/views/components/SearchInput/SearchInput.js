import "./searchInput.scss";

const isError = false;
const errorText = "Error text";

const SearchInput = () => {
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
