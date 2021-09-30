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

  const pageRange =
    currentPage < pageNumbers.length - 5
      ? [
          currentPage,
          Number(currentPage + 1),
          Number(currentPage + 2),
          "...",
          pageNumbers.length - 2,
          pageNumbers.length - 1,
          pageNumbers.length,
        ]
      : currentPage >= pageNumbers.length - 2
      ? [
          1,
          2,
          3,
          "...",
          pageNumbers.length - 2,
          pageNumbers.length - 1,
          pageNumbers.length,
        ]
      : [
          "F",
          pageNumbers.length - 5,
          pageNumbers.length - 4,
          pageNumbers.length - 3,
          pageNumbers.length - 2,
          pageNumbers.length - 1,
          pageNumbers.length,
        ];
  const handleClick = (e) => {
    e.target.value > 0
      ? setCurrentPage(Number(e.target.value))
      : setCurrentPage(1);
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

        {pageRange.map((pageNumber) =>
          pageNumber > 0 || pageNumber === "F" ? (
            <li key={pageNumber}>
              <button
                className={
                  pageNumber === currentPage
                    ? "pagination-container__button--selected"
                    : "pagination-container__button"
                }
                value={pageNumber}
                onClick={(e) => handleClick(e)}
              >
                {pageNumber}
              </button>
            </li>
          ) : (
            <div className="pagination-container__blob" key={pageNumber}>
              <span>...</span>
            </div>
          )
        )}

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
