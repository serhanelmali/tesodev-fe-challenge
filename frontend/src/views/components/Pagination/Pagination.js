import { useAppContext } from "../../../context/store";
import "./pagination.scss";
const Pagination = () => {
  const store = useAppContext();
  const {
    currentPage,
    personsPerPage,
    setCurrentPage,
    persons: { data },
  } = store;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / personsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  const handleNext = (e) => {
    currentPage === pageNumbers.length
      ? setCurrentPage(1)
      : setCurrentPage(currentPage + 1);
  };

  const handlePrevious = (e) => {
    currentPage === 1
      ? setCurrentPage(pageNumbers.length)
      : setCurrentPage(currentPage - 1);
  };

  return (
    pageNumbers.length > 1 && (
      <ul className="pagination-container">
        <li>
          <button
            className="pagination-container__button__next-previous-button"
            onClick={(e) => {
              handlePrevious(e);
            }}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((pageNumber) => (
          <li>
            <button
              className={
                pageNumber === currentPage
                  ? "pagination-container__button--selected"
                  : "pagination-container__button"
              }
              key={pageNumber}
              value={pageNumber}
              onClick={(e) => handleClick(e)}
            >
              {pageNumber}
            </button>
          </li>
        ))}

        <li>
          <button
            className="pagination-container__button__next-previous-button"
            onClick={(e) => {
              handleNext(e);
            }}
          >
            Next
          </button>
        </li>
      </ul>
    )
  );
};

export default Pagination;
