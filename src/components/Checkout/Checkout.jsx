import './Checkout.css'
import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del Email no coinciden")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.log("Error de Orden", error);
                setError("Error al cerar la orden, por favor reintente.");
            })

    }

    return (
        <div className='fondo'>
            <h2 className='checkout'>Checkout</h2>
            <form onSubmit={manejadorSubmit}>
                <div className='form1'>
                    {carrito.map(producto => (
                        <div key={producto.item.id} className='prodElegido'>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> Precio: $ {producto.item.precio} </p>
                        </div>
                    ))}
                </div>

                <h3 className='total'> Total de la Orden: $ {total} </h3>

                <div className='form2'>
                    <div className='call'>
                        <label htmlFor=""> Nombre </label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className='call'>
                        <label htmlFor=""> Apellido </label>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className='call'>
                        <label htmlFor=""> Teléfono </label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className='call'>
                        <label htmlFor=""> Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='call'>
                        <label htmlFor=""> Confirmación de Email </label>
                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>
                </div>

                <div className='error'>
                    {
                        error && <p style={{ color: "red" }}> {error} </p>
                    }
                </div>

                <button type="submit" className='but'> Finalizar Orden </button>

                <div className='orden'>
                    {
                        ordenId && (
                            <div>
                                <div className='tex'>¡Gracias por tu Compra! Tu número de orden es:</div>
                                <div className='num'> {ordenId} </div>
                            </div> 
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default Checkout