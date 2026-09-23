import React from "react";
import ReactPaginateImport from "react-paginate";
import css from "./Pagination.module.css";

const ReactPaginate =
  (ReactPaginateImport as unknown as { default: typeof ReactPaginateImport })
    .default || ReactPaginateImport;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
}) => {
  if (pageCount <= 1) {
    return null;
  }

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={(selected: { selected: number }) =>
        onPageChange(selected.selected + 1)
      }
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousLabel="<"
      nextLabel=">"
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
    />
  );
};

export default Pagination;
