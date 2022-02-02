//starting point of the backend

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors"); //required for CORS policy

app.use(express.json()); //for parsing body from JSON data

const corsOptions = {
  origin: ["http://localhost:3001"],
};

app.use(cors());

const connectDB = require("./config/db");
connectDB();

app.use("/api/files", require("./routers/form")); //for adding user data
app.use("/api/details", require("./routers/readDetails")); //for reading data
app.use("/api/files/update", require("./routers/update")); //for updating data
app.use("/api/files/delete", require("./routers/delete")); //for deleting data

app.get("/", (req, res) => {
  res.send("hello From Yash Sharma Its Backend you need FrontEnd ;_; ");
});

app.listen(PORT, () => {
  console.log(`listening on the port ${PORT}`);
});
