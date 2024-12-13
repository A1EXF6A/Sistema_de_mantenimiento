import Proveedores from "../models/Proveedores.js";

export const getProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedores.findAll();
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createProveedor = async (req, res) => {
    try {
        const nuevoProveedor = await Proveedores.create(req.body);
        res.json(nuevoProveedor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

