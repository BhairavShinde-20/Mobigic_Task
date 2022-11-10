const express = require("express");
const app = express();
const conn = require("./db");
const cors = require("cors");

//create a express server
app.listen(5000, () => {
    console.log("server is started");
})

app.use(cors());
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));
app.use("/upload",require("./routes/upload") );
app.use("/registeruser",require("./routes/user"));
app.use("/loginuser",require("./routes/loginuser"));



// connection to databse
conn.connection.on("connected", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("connected to database")
    }
})