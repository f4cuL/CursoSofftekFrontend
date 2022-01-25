import React from "react";
const PaginadorProductos = ({ pagination, setNumber, update }) => {
  return (
    <div>
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            {Array.from({ length: pagination.totalPages }).map((v, index) => (
              <li class="page-item" key={index}>
                <a
                  class="page-link"
                  onClick={() => {
                    setNumber(index);
                    update(index);
                  }}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginadorProductos;
