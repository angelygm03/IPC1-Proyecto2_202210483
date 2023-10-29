import { Link } from 'react-router-dom'
import styles from './PacienteNavbar.module.css'

import { useContext } from 'react'
import { UserContext } from '../../App';

function PacienteNavbar() {
    const usuario = useContext(UserContext);

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/paciente/editarPerfil"><b>{usuario.nombre} {usuario.apellido}</b></Link>
                </li>
                <li>
                    <Link to="/paciente/verMedicina">Medicina</Link>
                </li>
                <li>
                    <Link to="/paciente/solicitarCita">Solicitar cita</Link>
                </li>
                <li>
                    <Link to="/login">Salir</Link>
                </li>
            </ul>
        </nav>
    )
}

export default PacienteNavbar;