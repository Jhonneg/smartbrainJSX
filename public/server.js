import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

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
  login: [{}],
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  bcrypt.compare(
    "apples",
    "$2b$10$E0iNs8pnW8eDfMyeX5wMx.GhSkDqkgK.aN4f3OcIn7AMQL76reo0K",
    function (err, res) {
      console.log("first guess", res);
    }
  );
  bcrypt.compare(
    "cookies",
    "$2b$10$E0iNs8pnW8eDfMyeX5wMx.GhSkDqkgK.aN4f3OcIn7AMQL76reo0K",
    function (err, res) {
      console.log("second guess", res);
    }
  );
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
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
  database.users.push({
    id: "125",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("not found");
  }
});

app.post("/image", (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(400).json("not found");
  }
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

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
