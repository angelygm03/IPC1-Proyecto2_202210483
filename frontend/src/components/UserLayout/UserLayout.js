import { useContext } from 'react';
import { UserContext } from '../../App'
import DoctorNavbar from '../DoctorNavbar/DoctorNavbar'
import PacienteNavbar from '../PacienteNavbar/PacienteNavbar'
import EnfermeraNavbar from '../EnfermeraNavbar/EnfermeraNavbar'
import { Outlet } from 'react-router-dom'; 

function UserLayout() {
    const usuario = useContext(UserContext);

    let navbar = <DoctorNavbar />;
    switch (usuario.tipoUsuario) {
        case "PACIENTE":
           navbar = <PacienteNavbar/>
           break;
        case "ENFERMERA":
        navbar = <EnfermeraNavbar/>
            break;
    }

    return (
        <>
            {navbar}
            <Outlet />
        </>
    )
}

export default UserLayout;