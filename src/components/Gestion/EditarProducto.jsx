import alertify from "alertifyjs";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import productosService from "../../services/ProductosService";

const EditarProducto = ({ productoEditar, update }) => {
  const [nombre, setNombre] = useState(productoEditar.nombreProducto);
  const [precio, setPrecio] = useState(productoEditar.precioProducto);
  const [stock, setStock] = useState(productoEditar.stock);

  useEffect(() => {
    setNombre(productoEditar.nombreProducto);
    setPrecio(productoEditar.precioProducto);
    setStock(productoEditar.stock);
  }, [
    productoEditar.nombreProducto,
    productoEditar.precioProducto,
    productoEditar.stock,
  ]);

  const handleEditar = () => {
    const productoEditado = {
      nombreProducto: nombre,
      precioProducto: precio,
      stock,
    };
    console.log(productoEditado);
    productosService
      .editarProducto(productoEditar.id, productoEditado)
      .then((response) => {
        if (response.status === 400) {
          alertify.error("ERROR");
          setNombre("");
          setPrecio("");
          setStock("");
        } else {
          alertify.success("Editado");
          update();
          setNombre("");
          setPrecio("");
          setStock("");
        }
      });
  };

  return (
    <div>
      <div
        class="modal fade"
        id="modalProveedor"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modificar producto
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="nombre">Nombre</label>
                  <input
                    type="text"
                    class="form-control form-control-sm mb-1"
                    id="nombre"
                    value={nombre}
                    onChange={(input) => setNombre(input.target.value)}
                  />
                  <label for="precio">Precio</label>
                  <input
                    class="form-control form-control-sm mb-1"
                    type="text"
                    id="precio"
                    value={precio}
                    onChange={(input) => setPrecio(input.target.value)}
                  />
                  <label for="stock">Stock</label>
                  <input
                    class="form-control form-control-sm mb-1"
                    type="text"
                    id="stock"
                    value={stock}
                    onChange={(input) => setStock(input.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-dark"
                data-dismiss="modal"
                onClick={handleEditar}
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
