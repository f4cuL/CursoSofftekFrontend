import React from 'react'

const TablaProducto = ({listaProductos}) => {
    const listaFiltrada =  listaProductos.filter((producto)=>producto.stock>0);
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
                            <td>{producto.nombreProducto}</td>
                            <td>${producto.precioProducto}</td>
                            <td>{producto.stock}</td>
                            <th><input type="number" min="0" max="50" step="1" onkeydown="return false" onChange={(input)=>(input.target.value)>producto.stock?input.target.value=producto.stock:null}/></th>
                            <th><button><img src="https://image.flaticon.com/icons/png/512/107/107831.png" alt="carrito" width="20px"/></button></th>
                        </tr>)}

                </tbody>
            </table>

        </div>
    )
}

export default TablaProducto
