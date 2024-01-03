// import Pagination from "react-bootstrap/Pagination";

// function AdvancedExample() {
//   return (
//     <Pagination className="container-fluid">
//       <Pagination.First />
//       <Pagination.Prev />
//       <Pagination.Item>{1}</Pagination.Item>
//       <Pagination.Ellipsis />

//       <Pagination.Item>{10}</Pagination.Item>
//       <Pagination.Item>{11}</Pagination.Item>
//       <Pagination.Item active>{12}</Pagination.Item>
//       <Pagination.Item>{13}</Pagination.Item>
//       <Pagination.Item disabled>{14}</Pagination.Item>

//       <Pagination.Ellipsis />
//       <Pagination.Item>{20}</Pagination.Item>
//       <Pagination.Next />
//       <Pagination.Last />
//     </Pagination>
//   );
// }

// export default AdvancedExample;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AdvancedExample.js
import React from "react";
import Pagination from "react-bootstrap/Pagination";

function AdvancedExample({ totalPages, currentPage, onPageChange }) {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    // Calculate the range of visible pages based on the current page
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Render the pages within the current range
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    // Add ellipsis if there are more pages before the current range
    if (startPage > 1) {
      items.unshift(<Pagination.Ellipsis key="start-ellipsis" />);
      // Always render the first page if it's not in the current range
      items.unshift(
        <Pagination.Item
          key={1}
          active={1 === currentPage}
          onClick={() => handlePageClick(1)}
        >
          {1}
        </Pagination.Item>
      );
    }

    // Add ellipsis if there are more pages after the current range
    if (endPage < totalPages) {
      items.push(<Pagination.Ellipsis key="end-ellipsis" />);
      // Always render the last page if it's not in the current range
      items.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <Pagination className="container-fluid">
      <Pagination.First onClick={() => handlePageClick(1)} />
      <Pagination.Prev
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {renderPaginationItems()}

      <Pagination.Next
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last onClick={() => handlePageClick(totalPages)} />
    </Pagination>
  );
}

export default AdvancedExample;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
