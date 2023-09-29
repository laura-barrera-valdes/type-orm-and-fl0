import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/Task"

require('dotenv').config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'ep-purple-sky-79609015.us-east-2.aws.neon.fl0.io',
    port: 5432, // Default PostgreSQL port
    username: 'fl0user',
    password: 'NmC1sqOVwoS0',
    database: 'databasetest',
    synchronize: true, // Para Dev
    logging: true, // Para Dev
    entities: [Task], // Se requiere incluir cada nueva entidad
    migrations: [],
    subscribers: [],
    ssl: { rejectUnauthorized: false }, // Ignora el error de certificado no confiable
    name: 'default', // Asegúrate de definir el nombre de la conexión
})
