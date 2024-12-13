import Activos from "../models/Activos.js";

export const getActivos = async (req, res) => {
    try {
        const activos = await Activos.findAll();
        res.json(activos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createActivo = async (req, res) => {
    try {
        const nuevoActivo = await Activos.create(req.body);
        res.json(nuevoActivo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};