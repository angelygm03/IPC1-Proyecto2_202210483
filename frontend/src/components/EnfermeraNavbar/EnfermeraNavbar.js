import { useContext } from 'react'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

import styles from './EnfermeraNavbar.module.css'

function EnfermeraNavbar() {
    const usuario = useContext(UserContext);

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <span><b>{usuario.nombre} {usuario.apellido}</b></span>
                </li>
                <li>
                    <Link to="/enfermera/citasSolicitadas">Citas solicitadas</Link>
                </li>
                <li>
                    <Link to="/login">Salir</Link>
                </li>
            </ul>
        </nav>
    )
}

export default EnfermeraNavbar;