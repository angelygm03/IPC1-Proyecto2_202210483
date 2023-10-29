import { useState, useEffect } from 'react'
import styles from './ListaMedicinas.module.css';
import { useNavigate } from 'react-router-dom';


function ListaMedicinas() {
    const [medicinas, setMedicinas] = useState([]);
    const [carrito, setCarrito] = useState({});
    const navigate = useNavigate();
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const getMedicinas = async () => {
        const response = await fetch('http://localhost:4000/paciente/stockMedicinas');
        const data = await response.json();
        setMedicinas(data.medicinas);
    }

    useEffect(() => {
        getMedicinas();
    }, [])

    const handleAgregarAlCarrito = (idMedicina) => {
        const nuevoCarrito = { ...carrito };
        const cantidadDisponible = medicinas.find(med => med.idMedicina === idMedicina).cantDisponible;
        if (!(nuevoCarrito[idMedicina] >= cantidadDisponible)) {
            nuevoCarrito[idMedicina] = (nuevoCarrito[idMedicina] || 0) + 1;
            setCarrito(nuevoCarrito);
        } else {
            alert("Lo sentimos, has alcanzado el máximo de productos disponibles por el momento");
        }
    }

    const handleQuitarDelCarrito = (idMedicina) => {
        const nuevoCarrito = { ...carrito };
        if (nuevoCarrito[idMedicina] > 0) {
            nuevoCarrito[idMedicina] -= 1;
            setCarrito(nuevoCarrito);
        }
    }

    const calcularTotalPedido = () => {
        let total = 0;
        for (const idMedicina in carrito) {
            const medicina = medicinas.find(med => med.idMedicina === idMedicina);
            total += medicina.precio * carrito[idMedicina];
        }
        return total;
    }

    return (
        <div>
            <div className={styles.encabezado}>Farmacia UHospital</div>
            <div className={styles['medicinas-container']}>
            <button onClick={() => navigate('/paciente/carrito')} className={styles['carrito-button']}>
                Ver Carrito
            </button>
                {medicinas.map((medicina) => (
                    <div key={medicina.idMedicina} className={styles.medicina}>
                        <h3>{medicina.nombre}</h3>
                        <p>{medicina.descripcion}</p>
                        <p>Precio: Q{medicina.precio}</p>
                        <p>Cantidad Disponible: {medicina.cantDisponible} unidades</p>
                        <button onClick={() => handleAgregarAlCarrito(medicina.idMedicina)} className={styles['medicina-button']}>
                            Agregar ({carrito[medicina.idMedicina] || 0})
                        </button>
                        <button onClick={() => handleQuitarDelCarrito(medicina.idMedicina)} className={styles['medicina-button']}>
                            Quitar
                        </button>
                    </div>
                ))}
                <table className={styles['carrito-table']}>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(carrito).map(idMedicina => {
                            const medicina = medicinas.find(med => med.idMedicina === idMedicina);
                            return (
                                <tr key={idMedicina}>
                                    <td>{medicina.nombre}</td>
                                    <td>{carrito[idMedicina]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <p>Total del Pedido: Q{calcularTotalPedido()}</p>
            </div>
        </div>
    );
}

export default ListaMedicinas;