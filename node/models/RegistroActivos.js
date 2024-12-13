// Archivo: models/RegistroActivos.js
import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Activos from "./Activos.js";
import Proveedores from "./Proveedores.js";
import Ubicaciones from "./Ubicaciones.js";
import Responsables from "./Responsables.js";
import Usuarios from "./Usuarios.js";

const RegistroActivos = db.define("RegistroActivos", {
    id_reg: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_act_per: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
            model: Activos,
            key: "id_act",
        },
    },
    pro_per: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
            model: Proveedores,
            key: "id_pro",
        },
    },
    ubi_act_per: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Ubicaciones,
            key: "id_ubi",
        },
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    fecha_compra: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    registrado_por: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuarios,
            key: "id_usu",
        },
    },
    responsable: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
            model: Responsables,
            key: "id_res",
        },
    },
});

export default RegistroActivos;
