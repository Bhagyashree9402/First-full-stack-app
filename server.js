const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("./client/"))

const clientRoutes = require("./route/client-route.js");
app.use("/", clientRoutes);

const apiRoutes = require("./route/api-routes")
app.use(apiRoutes);


//initally open up the port
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);

});