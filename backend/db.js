import mysql from "mysql2"
 
export const db = mysql.createConnection({
    host:"localhost",
    user:"estudante1",
    password:"",
    database:"CookNator",
})