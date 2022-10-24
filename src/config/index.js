import dotenv from "dotenv";

dotenv.config();


export const config = {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    define: {
        timestamps: false,
        underscored: true
    }
}