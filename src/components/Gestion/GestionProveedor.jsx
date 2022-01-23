import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import ProveedoresService from '../../services/ProveedoresService';
import TablaProductosProveedor from './TablaProductosProveedor';

const GestionProveedores = () => {
  const location = useLocation();
  const [productos, setProductos] = useState({listaProductos:[]});
  const id = location.state;

  const traerProductos=()=>{
    ProveedoresService.obtenerProveedorPorID(id)
    .then((response)=>response.json()
    .then(data=>setProductos(data)));
  }

  useEffect(() => {
    traerProductos();
  }, []);
  
  
  return <div>
    <table className='table table-hover table-dark'>
      <tbody>
        <tr>
          <td className='d-flex justify-content-center'>Gestionar productos</td>
        </tr>
      </tbody>
    </table>
    <TablaProductosProveedor productos={productos}></TablaProductosProveedor>
  </div>;
};

export default GestionProveedores;
