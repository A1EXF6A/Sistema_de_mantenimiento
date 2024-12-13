// server/scr/models/Usuarios.ts
import { DataTypes, Model } from 'sequelize';
import db from '../config/database';

class Usuarios extends Model {
    public id_usu!: number;
    public nom_usu!: string;
    public con_usu!: string;
    public rol_usu!: string;
}

Usuarios.init({
    id_usu: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom_usu: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    con_usu: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    rol_usu: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    sequelize: db,
    tableName: 'Usuarios',
    timestamps: false,
});

export default Usuarios;