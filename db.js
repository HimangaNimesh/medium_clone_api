import mysql from "mysql"
import dotenv from 'dotenv';

dotenv.config(); 

console.log("3333333", process.env.DB_KEY)
export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: process.env.DB_KEY,
  database:"medium"
})