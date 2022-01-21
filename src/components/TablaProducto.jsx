import React from 'react'
import { useState } from 'react';

const TablaProducto = ({listaProductos}) => {
    const listaFiltrada =  listaProductos.filter((producto)=>producto.stock>0);
    console.log(listaFiltrada)
    return (
        <div className='container p-0 border border-dark rounded'>
            <form>
            </form>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Agregar</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listaFiltrada.map((producto, index) =>
                        <tr key={index}>
                            <th scope="col">{producto.nombreProducto}</th>
                            <th scope="col">${producto.precioProducto}</th>
                            <th scope="col">{producto.stock}</th>
                            <th scope="col"><input type="number" min="0" max="50" step="1" onkeydown="return false" onChange={(input)=>(input.target.value)>producto.stock?input.target.value=producto.stock:null}/></th>
                            <th scope="col"><button><img src="https://image.flaticon.com/icons/png/512/107/107831.png" alt="" srcset="" width="20px"/></button></th>
                        </tr>)}

                </tbody>
            </table>

        </div>
    )
}

export default TablaProducto
