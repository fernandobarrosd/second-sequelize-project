import { database } from "../../database";
import { DataTypes } from "sequelize";

export const Vendedor = database.define("vendedor", {
    id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "CodVendedor"
    },

    nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: "Nome"
    },
    salarioFixo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: "SalarioFixo"
    },
    faixaComissao: {
        type: DataTypes.ENUM(["A", "B", "C", "D"]),
        allowNull: false,
        field: "FaixaComissao"
    }
}, { tableName: "vendedor" })