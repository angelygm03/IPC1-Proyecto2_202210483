import { useContext } from 'react'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

import styles from './DoctorNavbar.module.css'

function DoctorNavbar() {
    const usuario = useContext(UserContext);

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <span><b>{usuario.nombre} {usuario.apellido}</b></span>
                </li>
                <li>
                    <Link to="/doctor/receta">Recetas</Link>
                </li>
                <li>
                    <Link to="/reportes">Reportes</Link>
                </li>
                <li>
                    <Link to="/login">Salir</Link>
                </li>
            </ul>
        </nav>
    )
}

export default DoctorNavbar;