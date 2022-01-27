import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ClienteService from "../../services/ClienteService";
import { Link } from "react-router-dom";

const TablaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const MY_ROUTE = "/cliente/:id";
  const obtenerClientes = () => {
    ClienteService.obtenerClientes().then((response) =>
      response.json().then((data) => setClientes(data))
    );
  };
  useEffect(() => {
    obtenerClientes();
  }, []);

  const handleButton = (listaOrdenes) => {
    setOrdenes(listaOrdenes);
  };
  return (
    <div>
      <table class="table table-striped bg-white">
        <thead>
          <tr>
            <th scope="col">Nombre cliente</th>
            <th scope="col">Cantidad de ordenes</th>
            <th scope="col">Gestion</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cli) => (
            <tr key={cli.id}>
              <td className="w-25">{cli.username}</td>
              <td className="w-25">{cli.listaOrdenes.length}</td>
              <td className="w-25">
                <Link
                  to={MY_ROUTE.replace(":id", cli.id)}
                  state={cli.listaOrdenes}
                >
                  <button
                    className="btn btn-dark"
                    onClick={() => handleButton(cli.listaOrdenes)}
                  >
                    Gestion
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaClientes;
