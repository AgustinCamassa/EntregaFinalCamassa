import './Cart.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className='fondo'>
                <h2 className='h2'> No hay productos en el carrito</h2>
                <Link className={"link"}     to='/'> Ver Productos </Link>
            </div>
        )
    }
    return (
        <div className='fondo'>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className='data'>
                <h3 className='dataText'>Total: ${total} </h3>
                <h3 className='dataText'>Cantidad total: {cantidadTotal} </h3>
            </div>
            <div className='nav'>
                <button className="link" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                <Link className={"link"} to='/checkout'> Finalizar Compra </Link>
                <Link className={"link"} to='/'> Seguir Comprando </Link>
            </div>
        </div>
    )
}

export default Cart