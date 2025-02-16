require("./config/database")
const express = require("express");
const voterRoutes = require("./routes/VoterRoutes");

const app = express();
app.use(express.json());

app.use("/voters", voterRoutes);


app.get("/", (req, res) => {
    res.send("Servidor en funcionamiento... 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})