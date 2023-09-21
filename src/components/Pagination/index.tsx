import { getPagination } from "../../helpers";

const classes = {
  button:
    "bg-white px-4 p-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:bg-gray-300 disabled:cursor-not-allowed",
  text: "font-semibold text-gray-900",
  wrapper: "flex flex-col items-center",
  description: "text-sm text-gray-700",
  buttonGroup: "inline-flex mt-2 xs:mt-0",
};

const Pagination = ({
  page,
  total,
  onPrev,
  onNext,
}: {
  page: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const { peek, end, isFirstPage, isLastPage } = getPagination({ total, page });

  return (
    <div className={classes.wrapper}>
      <span className={classes.description}>
        Showing <span className={classes.text}>{peek}</span> to{" "}
        <span className={classes.text}>{end}</span> of{" "}
        <span className={classes.text}>{total}</span> Entries
      </span>
      <div className={classes.buttonGroup}>
        <button
          onClick={onPrev}
          disabled={isFirstPage}
          className={`${classes.button} rounded-l-md`}
        >
          Prev
        </button>
        <button
          onClick={onNext}
          disabled={isLastPage}
          className={`${classes.button} rounded-r-md border-l-0`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
