import "./searchInput.scss";

const isError = true;
const errorText = "Error text";

//TODO: placeholder, placeholder style

const SearchInput = () => {
  return (
    <div className="search-container">
      <input
        className={
          !isError
            ? "search-container__input"
            : "search-container__input--error"
        }
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
