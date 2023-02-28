const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

const db = require("./Config/database");

//sever config
app.use(express.static(path.join(__dirname, '../Client/build/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build/index.html'));
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const employeeRouter=require('./routes/Employee-Route')

app.use('/Employee',employeeRouter)

//database connection

db.connectToDb();



app.listen(5000, () => {
  console.log("sever started running ");
});
