const express = require("express")
const cors = require('cors')
const app = express();

app.use(express.json())

app.use(cors({
    origin: "https://university-data-ui-86k3.vercel.app",
    credentials: true,
}));

const routeUser = require("./route/router");
app.use("/user",routeUser)




module.exports = app;