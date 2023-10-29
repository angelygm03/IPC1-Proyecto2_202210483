import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import UserLayout from './components/UserLayout/UserLayout';
import RegistroPaciente from './components/RegistroPaciente/RegistroPaciente';
import ListaMedicinas from './components/ListaMedicinas/ListaMedicinas'
import SolicitarCita from './components/SolicitarCita/SolicitarCita';
import EditarPerfil from './components/EditarPerfil/EditarPerfil';
import CitasSolicitadas from './components/CitasSolicitadas/CitasSolicitadas';
import Carrito from './components/Carrito/Carrito';

export const UserContext = React.createContext();

function App() {
  const [usuario, setUsuario] = useState(null);
  
  return (
    <UserContext.Provider value={usuario}>
      <Routes>
      // Rutas de Autenticacion
      <Route path="/" element={<Login setUsuario={setUsuario} />} />
      <Route path="/login" element={<Login setUsuario={setUsuario} />} />

      //Ruta de Registro
      <Route path="/registro" element={<RegistroPaciente />}>    
      </Route>

      // Rutas de los Usuarios de Tipo DOCTOR
        <Route path="/doctor" element={<UserLayout />}>         
        </Route>

        // Rutas de los Usuarios de Tipo PACIENTE
        <Route path="/paciente" element={<UserLayout />}> 
          <Route index element={<ListaMedicinas />} />
          <Route path="/paciente/verMedicina" element={<ListaMedicinas />} />
          <Route path="/paciente/solicitarCita" element={<SolicitarCita />} /> 
          <Route path="/paciente/carrito" element={<Carrito />} />
          <Route path="/paciente/editarPerfil" element={<EditarPerfil />} />
        </Route>

        // Rutas de los Usuarios de Tipo ENFERMERA
        <Route path="/enfermera" element={<UserLayout />}>
        <Route index element={<CitasSolicitadas />} />
        <Route path="/enfermera/citasSolicitadas" element={<CitasSolicitadas />} />
        </Route>

      </Routes>
    </UserContext.Provider>
  );
}

export default App;
  