const express = require("express");
const path = require("path");
const cors = require("cors");

const mainRoute = require("./routes/main-route");

const app = express();

app.listen("3001", () => {
  console.log("Sv in port 3001");
});

/* Seteo de ejs */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(mainRoute);
