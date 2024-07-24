const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const origins = [
    "https://university-data-ui-86k3.vercel.app",
    "http://localhost:5173"
];

app.use(cors({
    origin: origins,
    credentials: true,
}));

const routeUser = require("./route/router");
app.use("/user", routeUser);

module.exports = app;
