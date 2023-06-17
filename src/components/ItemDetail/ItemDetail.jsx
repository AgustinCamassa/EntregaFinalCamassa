import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <div className='tit'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
      </div>

      <div className='hand'>
        <div>
        <div className='divImg'>
          <img src={img} alt={nombre} />
        </div>
        <p className='lorem'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
        </div>
        <div className='botonTer'>
          {
            agregarCantidad > 0 ? (<Link to="/cart" className='divLink'> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail