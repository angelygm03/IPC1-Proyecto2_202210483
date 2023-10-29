import styles from './RegistroPaciente.module.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistroPaciente() {
    const [pacientes, setPacientes] = useState([]);
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const navigate = useNavigate();
    const camposObligatorios = ['nombrePaciente', 'apellidoPaciente', 'usuarioPaciente', 'fechaNacPaciente', 'sexo', 'contraseniaPaciente'];
    const [usuariosExistentes, setUsuariosExistentes] = useState([]);
    const [fecha, setFecha] = useState('');
    const [nuevoPaciente, setNuevoPaciente] = useState({}); // Definir nuevoPaciente

    const handleRegistro = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const camposIncompletos = camposObligatorios.filter((campo) => !formData.get(campo));

        const contraseniaPaciente = formData.get('contraseniaPaciente');
        const usuarioPaciente = formData.get('usuarioPaciente');
        if (contraseniaPaciente.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        if (usuariosExistentes.includes(usuarioPaciente)) {
            alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
            return;
        }

        if (camposIncompletos.length > 0) {
            alert('Por favor, complete todos los campos obligatorios.');
        } else {
            setUsuariosExistentes([...usuariosExistentes, usuarioPaciente]);

            const nuevoPaciente = {
                idUsuario: uuidv4(),
                nombre: formData.get('nombrePaciente'),
                apellido: formData.get('apellidoPaciente'),
                usuarioPaciente: usuarioPaciente,
                fechaNacPaciente: formData.get('fechaNacPaciente'),
                sexo: formData.get('sexo'),
                contraseniaPaciente: formData.get('contraseniaPaciente'),
                tipoUsuario: 'PACIENTE'
            };

            
            fetch('/api/registrarUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoPaciente),
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error al registrar usuario');
                    }
                })
                .then(data => {
                    console.log('Usuario registrado exitosamente:', data);
                    
                })
                .catch(error => {
                    console.error('Error al registrar usuario:', error);
                });

            setPacientes([...pacientes, nuevoPaciente]);
            setNuevoPaciente(nuevoPaciente); 
            setMostrarAlerta(true);
        }
    }

    const handleAceptarAlerta = () => {
        setMostrarAlerta(false);
        navigate('/login');
    }

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.topText}>Bienvenido a UHospital</h2>
            <h3 className={styles.subtitle}>-Registro-</h3>
            <form onSubmit={handleRegistro} encType="multipart/form-data">
                <div>
                    <label htmlFor="nombrePaciente" className={styles.label}>*Nombre:</label>
                    <input type="text" id="nombrePaciente" name="nombrePaciente" placeholder="Ingrese su nombre" />
                </div>
                <div>
                    <label htmlFor="apellidoPaciente" className={styles.label}>*Apellido:</label>
                    <input type="text" id="apellidoPaciente" name="apellidoPaciente" placeholder="Ingrese su apellido" />
                </div>
                <div>
                    <label htmlFor="usuarioPaciente" className={styles.label}>*Nombre de usuario:</label>
                    <input type="text" id="usuarioPaciente" name="usuarioPaciente" placeholder="Ingrese un nombre de usuario" />
                </div>
                <div>
                    <label htmlFor="fechaNacPaciente" className={styles.label}>*Fecha de Nacimiento:</label>
                    <input
                    type="date"
                    id="fechaNacPaciente" 
                    name="fechaNacPaciente"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
                <br />
                </div>
                <div>
                    <label htmlFor="sexo" className={styles.label}>*Sexo:</label>
                    <input type="text" id="sexo" name="sexo" placeholder="F/M" />
                </div>
                <div>
                    <label htmlFor="contraseniaPaciente" className={styles.label}>*Contraseña:</label>
                    <input type="password" id="contraseniaPaciente" name="contraseniaPaciente" placeholder="*****" />
                </div>
                <div>
                    <label htmlFor="numeroTelefono" className={styles.label}>Número de Teléfono:</label>
                    <input type="text" id="numeroTelefono" name="numeroTelefono" placeholder="1234-5678" />
                </div>
                <p className={styles.bottomText}>* Campos obligatorios</p>
                <div>
                    <button type="submit" className={styles.botonRegistro}> Aceptar </button>
                </div>
            </form>
                {mostrarAlerta && (
                <div className="alert alert-success">
                    Registro exitoso. Puedes iniciar sesión.
                    <button className={styles.btnAceptar} onClick={handleAceptarAlerta}>
                    Iniciar Sesión
                    </button>
                </div>
                )}
        </div>
      );
}

export default RegistroPaciente; 