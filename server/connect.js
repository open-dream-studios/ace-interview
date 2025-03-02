import mysql from "mysql2"
import dotenv from 'dotenv';
dotenv.config();

export const db = mysql.createConnection({
    host: 'switchback.proxy.rlwy.net',
    port: 21464,
    user: 'root',
    password: 'ayBSorwPhuHThXBFXLtLsUkyowyCpwjt',
    database: 'ace-interview' 
});