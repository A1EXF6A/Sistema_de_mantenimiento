import Ubicaciones from "../models/Ubicaciones.js";

export const getUbicaciones = async (req, res) => {
    try {
        const ubicaciones = await Ubicaciones.findAll();
        res.json(ubicaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createUbicacion = async (req, res) => {
    try {
        const nuevaUbicacion = await Ubicaciones.create(req.body);
        res.json(nuevaUbicacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};