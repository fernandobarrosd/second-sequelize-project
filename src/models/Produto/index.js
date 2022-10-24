import { database } from "../../database";
import { DataTypes } from "sequelize";


export const Produto = database.define("produto", {
    id: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "CodProduto"
    },
    descricao: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "Descricao"
    },
    valorUnitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: "ValorUnitario"
    }
}, { tableName: "produto" })