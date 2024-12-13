import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Ubicaciones = db.define("Ubicaciones", {
    id_ubi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    edi_ubi: { type: DataTypes.STRING(10), allowNull: false },
    piso_ubi: { type: DataTypes.STRING(10), allowNull: false },
    num_lab_ubi: { type: DataTypes.STRING(10), allowNull: false },
});

export default Ubicaciones;
