import express, { response } from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "41277714",
    database: "smart-brain",
  },
});

db.select("*")
  .from("users")
  .then((data) => {
    console.log(data);
  });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@hotmail.com",
      password: "cookies",
      entries: "0",
      joined: new Date(),
    },
    {
      id: "124",
      name: "Sally",
      email: "sally@hotmail.com",
      password: "bananas",
      entries: "0",
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json("error logging in");
  }
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log(hash);
  });

  db("users")
    .returning("*")
    .insert({
      email: email,
      name: name,
      joined: new Date(),
    })
    .then((user) => {
      res.json(user[0]);
    })
    .catch((err) => res.status(400).json("unable to register"));
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not Found");
      }
    })
    .catch((err) => res.status(400).json("Error getting user"));
});

app.put("/image", (req, res) => {
  const { id } = req.body;
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      console.log(entries);
    });
});
app.listen(3000, () => {
  console.log("app is running on port 3000");
});

// bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//   // Store hash in your password DB.
// });
// bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
//   // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
//   // result == false
// });
