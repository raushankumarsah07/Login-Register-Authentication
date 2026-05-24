import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { EmployeeModel } from "./models/Employee.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/employeetable")
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("Passwor is incorrect");
        }
      } else {
        res.json("NO record exitsted");
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});

// username: roshankrgami_db_user
// password: 10Sn2iVlMlWkJVvw
