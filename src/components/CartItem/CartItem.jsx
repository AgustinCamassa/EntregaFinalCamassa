import './CartItem.css'
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className='card'>
        <h4 className='text'> {item.nombre} </h4>
        <p className='text'> Cantidad: {cantidad} </p>
        <p className='text'> Precio: $ {item.precio} </p>
        <button onClick={()=> eliminarProducto(item.id)}  className='textE'> Eliminar </button>
    </div>
  )
}

export default CartItem