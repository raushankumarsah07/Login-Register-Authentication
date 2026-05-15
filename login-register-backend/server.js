import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://roshankrgami_db_user:10Sn2iVlMlWkJVvw@cluster0.gkj7ido.mongodb.net/",
    { dbName: "Login_Register" },
  )
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Making login reister through mongodb database.");
});

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});

// username: roshankrgami_db_user
// password: 10Sn2iVlMlWkJVvw
