import React, { useEffect } from "react";

const PaginadorProveedorProducto = ({ pagination, number, update }) => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          {Array.from({ length: pagination.totalPages }).map((v, index) => (
            <li class="page-item" key={index}>
              <a
                class="page-link"
                onClick={() => {
                  update(index);
                  number(index);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PaginadorProveedorProducto;
