import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Responsables = db.define("Responsables", {
    id_res: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    nom_res: { type: DataTypes.STRING(10), allowNull: false },
    ape_res: { type: DataTypes.STRING(10), allowNull: false },
});

export default Responsables;