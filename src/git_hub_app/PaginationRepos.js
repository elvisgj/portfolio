import React from "react";
import "./resultTable.css";
import { Link } from "react-router-dom";

function PaginationRepos({ totalPages, userName, currentPage }) {
  const pageNumbers = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  const trimStart =
    currentPage < 4
      ? 0
      : currentPage <= totalPages - 2
      ? currentPage - 3
      : totalPages - 5;
  const trimEnd = trimStart === 0 ? 5 : trimStart + 5;
  const pagesToShow = pageNumbers.slice(trimStart, trimEnd);

  return (
    <div className="pagination-repos">
      <ul className="page-links">
        {totalPages < 6 || trimStart < 1 ? (
          ""
        ) : (
          <li>
            <Link
              className="edge-left"
              to={`/github/users/${userName}/repos?page=1`}
            >
              First
            </Link>
          </li>
        )}
        {pagesToShow.map((number) => (
          <li key={number}>
            <Link
              className="anc"
              to={`/github/users/${userName}/repos?page=${number}`}
            >
              {number}
            </Link>
          </li>
        ))}
        {totalPages > 5 && trimStart < totalPages - 5 ? (
          <li>
            <Link
              className="edge-right"
              to={`/github/users/${userName}/repos?page=${totalPages}`}
            >
              Last
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default PaginationRepos;
