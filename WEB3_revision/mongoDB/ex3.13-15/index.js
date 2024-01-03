require("dotenv").config();
const express = require("express");
const personRoutes = require("./routes/personRoutes");
const { logger, attachCurrentUser } = require("./middleware");
require("./db"); // Initialise la connexion à la base de données

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(logger);
app.use(attachCurrentUser);
app.use(personRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
