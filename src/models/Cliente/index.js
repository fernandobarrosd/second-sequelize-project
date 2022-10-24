import { database } from "../../database";
import { DataTypes } from "sequelize";


export const Cliente = database.define("cliente", {
    id: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "CodCliente",
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "Nome"
    },

    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "Endereco"
    },

    cidade: {
        type: DataTypes.STRING(60),
        allowNull: false,
        field: "Cidade"
    },
    cep: {
        type: DataTypes.STRING(11),
        allowNull: false,
        field: "Cep"
    },

    uf: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        field: "Uf"
    },

    ie: {
        type: DataTypes.STRING(12),
        allowNull: false,
        field: "Ie",
        
    }


}, { tableName: "cliente" })

