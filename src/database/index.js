import { Sequelize } from "sequelize";
import { config } from "../config";

export const database = new Sequelize(config);