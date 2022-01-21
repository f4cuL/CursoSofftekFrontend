import React from 'react'
import {useState} from 'react'

const TablaProducto = ({listaProductos}) => {

    return (
        <div>
            <form>
            </form>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">precio</th>
                        <th scope="col">Agregar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProductos.map((producto, index) =>
                        <tr key={index}>
                            <th scope="col">{producto.nombreProducto}</th>
                            <th scope="col">${producto.precioProducto}</th>
                        </tr>)}

                </tbody>
            </table>

        </div>
    )
}

export default TablaProducto
