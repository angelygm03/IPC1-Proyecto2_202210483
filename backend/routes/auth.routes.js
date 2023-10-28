const express = require('express');
const AppData = require('../AppData');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// Logear Usuario
router.post('/login', (req, res) => {
    const nombreUsuario = req.body.nombreUsuario;
    const contrasenia = req.body.contrasenia;

    for (usuario of AppData.usuarios) {
        if (usuario.nombreUsuario === nombreUsuario && usuario.contrasenia === contrasenia) {
            return res.status(200).json({ usuario })
        }
    }

    return res.status(400).json({
        error: 'Credenciales incorrectas. Por favor inténtelo de nuevo o regístrese.'
    })

})
router.post('/registro', (req, res) => {
    const nuevoUsuario = req.body; // Los datos del usuario llegan en el cuerpo de la solicitud
    AppData.usuarios.push({
        idUsuario: uuidv4(),
        ...nuevoUsuario,
    });

    return res.status(200).json({ mensaje: 'Usuario registrado exitosamente' });
});

module.exports = router;