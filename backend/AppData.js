usuarios = [
    {
        idUsuario: '576c4a37-850a-4931-b51b-f2111f8e986f',
        nombre: 'Mario',
        apellido: 'Lopez',
        nombreUsuario: 'drLopez',
        contrasenia: 'dr123',
        fechaNac: '08/09/1972',
        sexo: 'M',
        telefono: '3793-3100',
        tipoUsuario: 'DOCTOR'
    },
    {
        idUsuario: 'f457ba45-622d-4f1f-8e06-6ce044a4312e',
        nombre: 'Luis',
        apellido: 'Barrera',
        nombreUsuario: 'drBarrera',
        contrasenia: 'drB456',
        fechaNac: '14/06/1980',
        sexo: 'M',
        telefono: '3400-2641',
        tipoUsuario: 'DOCTOR'
    },
    {
        idUsuario: 'b4fecd02-42e3-478d-94ce-4abd807fd42c',
        nombre: 'Marlen',
        apellido: 'Diaz',
        nombreUsuario: 'enfDiaz',
        contrasenia: 'enfD123',
        fechaNac: '04/12/1998',
        sexo: 'F',
        telefono: '5656-4170',
        tipoUsuario: 'ENFERMERA'
    },
    {
        idUsuario: '8a5914d8-2c33-4dfe-b0b1-c27ea0455c64',
        nombre: 'Cristina',
        apellido: 'Ramirez',
        nombreUsuario: 'enfe123',
        contrasenia: 'enfe123',
        fechaNac: '23/08/1992',
        sexo: 'F',
        telefono: '4697-1256',
        tipoUsuario: 'ENFERMERA'
    },
    {
        idUsuario: 'fe5d1c9d-18df-48aa-8bcd-356cc824a1b6',
        nombre: 'Angely',
        apellido: 'Garcia',
        nombreUsuario: 'paciente123',
        contrasenia: 'paciente123',
        fechaNac: '29/12/2003',
        sexo: 'F',
        telefono: '4156-9435',
        tipoUsuario: 'PACIENTE'
    }
]

citas = [
    {
        idCita: '5f9cb14e-d665-49a4-83eb-363ef3a09843',
        fecha: "02/11/2023",
        Hora: '10:30',
        motivo: 'Gripe y tos',
        estado: 'PENDIENTE',
        idUsuario: '576c4a37-850a-4931-b51b-f2111f8e986f'
    }
]
function agregarCita(fecha, hora, motivo, idUsuario) {
    const nuevaCita = {
        idCita: uuidv4(), 
        fecha,
        hora,
        motivo,
        estado: 'PENDIENTE', 
        idUsuario,
    };

    citas.push(nuevaCita); 

    return nuevaCita; 
}


carritos = [
    {
        idCarrito: '2574c9d2-4d75-480f-89d6-f255769db2cf',
        fecha: '11/10/2023',
        registrado: false,
        idUsuario: 'fe5d1c9d-18df-48aa-8bcd-356cc824a1b6'
    }
]

medicinas = [
    {
        idMedicina: '651cd53a-96e3-4cfe-bf75-d1c6fb1dc75d',
        nombre: 'Desloratadina 5 mg',
        descripcion: 'Antihístaminico que alivia los síntomas de rinitis alérgica como estornudos, moqueo o picor nasal, picor en el paladar, enrojecimiento de ojos o lagrimeo.',
        precio: 10,
        cantDisponible: 4
    },
    {
        idMedicina: 'b771f59e-761a-4dbd-99a7-5ca52f7b60b8',
        nombre: 'Amoxicilina 500 mg',
        descripcion: 'Su acción consiste en detener el crecimiento de las bacterias. Los antibióticos como la amoxicilina no actúan para combatir resfriados, influenza y otras infecciones virales.',
        precio: 35,
        cantDisponible: 9
    },
    {
        idMedicina: 'f5c21d8c-191a-45b1-8784-34c2701a4a97',
        nombre: 'Candesartan 32 mg',
        descripcion: 'Candesartan se usa para el tratamiento de la presión arterial elevada (hipertensión) en adultos y niños que tienen al menos 1 año. ',
        precio: 329,
        cantDisponible: 14
    },
    {
        idMedicina: 'a0df8f7d-22ee-42f7-ad19-89fb6b533a90',
        nombre: 'Centrum Silver',
        descripcion: 'Auxiliar en la deficiencia de vitaminas, minerales y antioxidantes en los estados de desgaste como son: cansancio, fatiga, baja concentración, retención mental y salud visual.',
        precio: 349,
        cantDisponible: 19
    },
    {
        idMedicina: '5b37cf72-6c6b-4b54-a81a-4afae2494298',
        nombre: 'Pepto-Bismol 473 ml',
        descripcion: 'Alivian la acidez, la indigestión, el malestar estomacal, las náuseas y la diarrea con comprimidos sin sabor. ',
        precio: 102,
        cantDisponible: 6
    },
    {
        idMedicina: '214c996e-ae23-45f1-a757-7a1b5d94ea82',
        nombre: 'Ibuprofeno 600 mg',
        descripcion: 'Se utiliza para reducir la fiebre y aliviar los dolores menores por de cefalea, dolor muscular, artritis, periodos menstruales, resfriado común, dolor de muelas y dolor de espalda.',
        precio: 38,
        cantDisponible: 11
    },
]

medicinasCarrito = [
    {
        idMedicinaCarrito: '29f6314c-6d43-41dd-bdc6-dac8b2078317',
        cantidad: 1,
        idMedicina: '214c996e-ae23-45f1-a757-7a1b5d94ea82',
        idCarrito: '2574c9d2-4d75-480f-89d6-f255769db2cf'
    }
]

module.exports = {
    usuarios,
    citas,
    carritos,
    medicinas,
    medicinasCarrito,
    agregarCita
}
