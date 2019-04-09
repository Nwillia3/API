const express = require("express");
const mongoose = require("mongoose");

const snkrs = require("./Routes/api/snkrs");

const app = express();

//middleware
app.use(express.json());

//DB config
const db = require("./Config/keys").mongoURI;

//connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Db connected"))
  .catch(err => console.log(err));

// Use Routes

app.use("/api/snkrs", snkrs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
