import { DataTypes, Model } from 'sequelize';
import db from '../config/database';

class Activos extends Model {
    public id_act!: string;
    public nom_act!: string;
    public mar_act!: string;
    public mod_act!: string;
    public serie_act!: string;
}

Activos.init({
    id_act: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    nom_act: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    mar_act: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    mod_act: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    serie_act: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    sequelize: db,
    tableName: 'Activos',
    timestamps: false,
});

export default Activos;