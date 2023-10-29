import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();

    const handleIngresar = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data',
            },
            body: formData
        })
        const data = await response.json();

        if (response.status !== 200) {
            alert(data.error);
            return;
        }

        props.setUsuario(data.usuario);
        switch (data.usuario.tipoUsuario) {
            case "DOCTOR":
                navigate('/doctor')
                break;
            case "PACIENTE":
                navigate('/paciente')
                break;
            case "ENFERMERA":
                navigate('/enfermera')
                break;
        }
    }


    return (
        <div className={styles.formContainer}>
            <h2 className={styles.topText}>Bienvenido a UHospital</h2>
            <h3 className={styles.subtitle}>-Inicio de Sesión-</h3>
            <form onSubmit={handleIngresar} encType="multipart/form-data">
                <div>
                    <label htmlFor="nombreUsuario" className={styles.label}>Nombre de Usuario:</label>
                    <input type="text" id="nombreUsuario" name="nombreUsuario" placeholder="Ingrese su nombre de usuario" />
                </div>
                <div>
                    <label htmlFor="contrasenia" className={styles.label}>Contraseña:</label>
                    <input type="password" id="contrasenia" name="contrasenia" placeholder="*****" />
                </div>
                <div>
                    <button type="submit" className={styles.botonIngresar}> Ingresar </button>
                </div>
                <div>
                <Link to="/registro" className={`${styles.botonRegistro} boton-registro`}> Registrarse </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;