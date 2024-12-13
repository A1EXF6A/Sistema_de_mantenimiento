import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Activos = db.define("Activos", {
    id_act: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    nom_act: { type: DataTypes.STRING(100), allowNull: false },
    mar_act: { type: DataTypes.STRING(100), allowNull: false },
    mod_act: { type: DataTypes.STRING(100), allowNull: false },
    serie_act: { type: DataTypes.STRING(100), allowNull: false },
});

export default Activos;