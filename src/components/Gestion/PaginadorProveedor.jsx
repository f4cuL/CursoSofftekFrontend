import React from "react";
const PaginadorProveedor = ({ pagination, update, number }) => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          {Array.from({ length: pagination.totalPages }).map((v, index) => (
            <li class="page-item">
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

export default PaginadorProveedor;
