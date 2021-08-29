const express = require("express");
const app = express();
const mysql = require("mysql");

const db= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"ads_app",
});

app.get("/",(req,res)=>{
    const sqlInsert="INSERT INTO `mydb`.`table1`(`ID`,`Description`, `Name`) VALUES (012,'A good boy','Yoo');"
    db.query(sqlInsert,(err,result)=>{
        res.send(result + "chala");
    })
})

app.listen(3001,()=>{
    console.log("Server running at 3001");
})