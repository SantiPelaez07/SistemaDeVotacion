require("./config/database")
const express = require("express");
const voterRoutes = require("./routes/VoterRoutes");
const candidateRouter = require("./routes/CandidateRouter");

const app = express();
app.use(express.json());

app.use("/voter", voterRoutes);
app.use("/candidate", candidateRouter);


app.get("/", (req, res) => {
    res.send("Servidor en funcionamiento... 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})