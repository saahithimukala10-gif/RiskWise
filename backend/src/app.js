const express = require("express");
const cors = require("cors");

const riskRoutes = require("./routes/risk.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/risk", riskRoutes);

module.exports = app;
