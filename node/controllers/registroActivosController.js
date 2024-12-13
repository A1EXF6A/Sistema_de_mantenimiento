import RegistroActivos from "../models/RegistroActivos.js";

export const getRegistroActivos = async (req, res) => {
    try {
        const registros = await RegistroActivos.findAll();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createRegistroActivo = async (req, res) => {
    try {
        const nuevoRegistro = await RegistroActivos.create(req.body);
        res.json(nuevoRegistro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};