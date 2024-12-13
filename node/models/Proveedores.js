import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Proveedores = db.define("Proveedores", {
    id_pro: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    nom_pro: { type: DataTypes.STRING(10), allowNull: false },
    ubi_pro: { type: DataTypes.STRING(10), allowNull: false },
    gar_pro: { type: DataTypes.INTEGER, allowNull: false },
});

export default Proveedores;