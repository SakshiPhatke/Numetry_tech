import React, { useState } from "react";
import { Button } from "react-bootstrap";

const PaginationComponent = ({ items, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Paginated Items</h2>

      {/* Display Items */}
      <ul className="list-group mb-3">
        {currentItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <Button className="page-link" onClick={() => goToPage(currentPage - 1)}>
              Previous
            </Button>
          </li>

          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
              <Button className="page-link" onClick={() => goToPage(index + 1)}>
                {index + 1}
              </Button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <Button className="page-link" onClick={() => goToPage(currentPage + 1)}>
              Next
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;
