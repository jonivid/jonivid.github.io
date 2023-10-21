export const Pagination = ({
  currentPage,
  numOfPages,
  onNext,
  onPrev,
  setPage
}) => {
  const numOfPagesToShowCloseToCurrentPage = 5;
  const from = Math.max(0, currentPage - numOfPagesToShowCloseToCurrentPage);
  const to = Math.min(
    numOfPages,
    currentPage + numOfPagesToShowCloseToCurrentPage
  );

  const pagesToRender = [...Array(numOfPages).keys()].slice(from, to);
  const onClickSetPage = (pageNumber) => () =>
    setPage && pageNumber !== currentPage && setPage(pageNumber);
  const onClickNext = () => onNext && onNext();
  const onClickPrev = () => onPrev && onPrev();
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === numOfPages - 1;
  return (
    <div>
      {!isFirstPage && <span onClick={onClickPrev}>&lt;</span>}
      {pagesToRender.map((pageNumber) => (
        <span
          key={pageNumber}
          onClick={onClickSetPage(pageNumber)}
          style={{
            margin: "0 5px",
            textDecoration: pageNumber === currentPage ? "unset" : "underline"
          }}
        >
          {pageNumber}
        </span>
      ))}
      {!isLastPage && <span onClick={onClickNext}>&gt;</span>}
    </div>
  );
};
