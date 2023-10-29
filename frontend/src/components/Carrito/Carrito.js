
import React, { useState, useEffect } from 'react';


function Carrito({ medicinasCarrito }) {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        // Aquí podrías procesar los datos de medicinasCarrito si es necesario
        setCarrito(medicinasCarrito);
    }, [medicinasCarrito]);

    return (
        <div>
            <h2>Carrito de Compras</h2>
        </div>
    );
}

export default Carrito;