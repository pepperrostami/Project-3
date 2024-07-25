//////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables

require("dotenv").config(0);
const { PORT } = process.env;
const express = require("express");
const app = express();
const routes = require('./routes/index')
const cors = require("cors");

app.use(cors()); 
app.use(express.urlencoded({extended: true}))
app.use(express.json()); 

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use('/', routes)

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));