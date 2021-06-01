const express = require("express");
var cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());

//connect to db
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Api Running"));

// Define Routes
app.use("/api/todos", require("./routes/api/todos"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
