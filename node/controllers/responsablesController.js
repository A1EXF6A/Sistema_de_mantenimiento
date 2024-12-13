import Responsables from "../models/Responsables.js";

export const getResponsables = async (req, res) => {
    try {
        const responsables = await Responsables.findAll();
        res.json(responsables);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createResponsable = async (req, res) => {
    try {
        const nuevoResponsable = await Responsables.create(req.body);
        res.json(nuevoResponsable);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};