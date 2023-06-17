import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <img className='imgProducto' src={img} alt={nombre} />
      <div className='boxText'>
        <h3 className='textCatT'>Nombre: {nombre} </h3>
        <p className='textCat'>Precio: {precio} </p>
        <p className='textCat'>ID: {id} </p>
        <Link className={"linkCat"} to={`/item/${id}`}> Ver Detalles</Link>
      </div>
    </div>
  )
}

export default Item