import alertify from "alertifyjs";
import React, { useState } from "react";
import productosService from "../../services/ProductosService";

const AgregarProductoAProveedor = ({ idProveedor, update }) => {
  const handleClickAgregar = () => {
    const producto = {
      nombreProducto: inputNombre,
      precioProducto: inputPrecio,
      stock: inputStock,
    };
    console.log(producto);
    productosService.agregarProducto(producto, idProveedor).then((response) => {
      if (response.status == 400) {
        alertify.error("ERROR");
      } else {
        update();
        setInputNombre("");
        setInputPrecio("");
        setInputStock("");
      }
    });
  };
  const [inputNombre, setInputNombre] = useState("");
  const [inputPrecio, setInputPrecio] = useState("");
  const [inputStock, setInputStock] = useState("");
  return (
    <div>
      <div className="container border border-dark pt-2">
        <button
          className="mb-2"
          data-toggle="collapse"
          data-target="#agregar"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"
            height="20px"
            alt=""
            srcset=""
          />
        </button>
        <div class="collapse" id="agregar">
          <form>
            <div class="form-group">
              <label for="inputNombre">Nombre</label>
              <input
                class="form-control"
                type="text"
                placeholder="Nombre"
                id="inputNombre"
                value={inputNombre}
                onChange={(input) => setInputNombre(input.target.value)}
              />
              <div class="invalid-feedback">
                La dirección no puede estar vacia
              </div>
            </div>
            <div class="form-group">
              <label for="direccion">Precio</label>
              <input
                class="form-control"
                type="text"
                placeholder="Precio"
                id="direccion"
                value={inputPrecio}
                onChange={(input) => setInputPrecio(input.target.value)}
              />
              <div class="invalid-feedback">
                La dirección no puede estar vacia
              </div>
            </div>
            <div class="form-group">
              <label for="cuit">Stock</label>
              <input
                class="form-control"
                type="number"
                placeholder="Stock"
                id="cuit"
                value={inputStock}
                onChange={(input) => setInputStock(input.target.value)}
              />
              <div class="invalid-feedback">
                El Cuit no puede ser menor o mayor a 11
              </div>
            </div>
          </form>
          <input
            type="button"
            className="btn btn-dark mb-2"
            value="Agregar"
            onClick={handleClickAgregar}
          />
        </div>
      </div>
    </div>
  );
};

export default AgregarProductoAProveedor;
