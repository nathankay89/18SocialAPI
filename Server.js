//Vars: express, db, routes, PORT, app
const express = require("express");
const db = require("./config/Connections");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware: express.urlencoded, express.json, routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Connect to db, listen on PORT
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
  });
});