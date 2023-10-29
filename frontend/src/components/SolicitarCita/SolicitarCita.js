import React, { useState } from 'react';
import styles from './SolicitarCita.module.css'

function SolicitarCita() {
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [motivo, setMotivo] = useState('');
    const [estadoCita, setEstadoCita] = useState('Pendiente');
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const handleSolicitarCita = (e) => {
        e.preventDefault(); 
        if (!fecha || !hora || !motivo) {
            alert('Por favor, completa todos los campos.');
        } else {
            setEstadoCita('Pendiente'); 
            setMostrarAlerta(true);
        }
    };


    return (
        <div className={styles.formContainer}>
            <h2 className={styles.topText}>Agenda una Cita</h2>
            <form onSubmit={handleSolicitarCita} encType="multipart/form-data">
            <label htmlFor="Fecha" className={styles.label}>Fecha:</label>
                <input
                    type="date"
                    id="FechaCita" 
                    name="FechaCita"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="Hora" className={styles.label}>Hora:</label>
                <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="Motivo" className={styles.label}>Motivo de la cita:</label>
                <textarea
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    rows="4"
                    required
                />
                <br />
                <button type="submit" className={styles.boton}> Solicitar </button>
            </form>
            {mostrarAlerta && (
                <div className="alert alert-info">
                    Tu cita ha sido creada y se encuentra pendiente de confirmación.
                </div>
                )}
        </div>
      );
}
export default SolicitarCita;