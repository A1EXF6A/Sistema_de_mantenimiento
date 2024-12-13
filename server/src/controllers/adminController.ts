/*import { Usuarios } from '../models/adminModel';
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await Usuarios.findAll();
        res.json(users);
    } catch (error) {
        res.status(500);
        res.json({ message: (error as Error).message });
    }
};*/
