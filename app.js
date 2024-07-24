const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const origins = [
    "https://university-data-ui.vercel.app",
    "http://localhost:5173"
];

app.use(cors({
    origin: "https://university-data-ui.vercel.app",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

const routeUser = require("./route/router");
app.use("/user", routeUser);

app.options('*', cors());  // Handle preflight requests

module.exports = app;
