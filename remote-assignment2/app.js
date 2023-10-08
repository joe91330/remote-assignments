const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/healthcheck", (req, res) => {
  res.send("OK!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "joe10277",
  database: "assignment",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected successfully");
  }
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");

  const requestDate = new Date().toUTCString();
  res.setHeader("Request-Date", requestDate);
  next();
});

function validatePassword(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[\W_]/.test(password);
  const ruleCount = [
    hasUpperCase,
    hasLowerCase,
    hasDigit,
    hasSpecialChar,
  ].filter(Boolean).length;
  return ruleCount >= 3;
}
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    !usernameRegex.test(name) ||
    !emailRegex.test(email) ||
    !validatePassword(password)
  ) {
    return res.status(400).json({ error: "Invalid input data" });
  }

// email是否存在
  const checkEmailSql =
    "SELECT COUNT(*) AS emailCount FROM user WHERE email = ?";
  db.query(checkEmailSql, [email], (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Error checking email existence" });
    }
    const emailCount = result[0].emailCount;
    if (emailCount > 0) {
      return res.status(409).json({ error: "Email already exists" });
    }
  });

  const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      res.status(500).json({ error: "Error inserting data into the database" });
    }

    if (result.affectedRows === 1) {
      const requestDate = new Date().toUTCString();
      const responseData = {
        data: {
          user: {
            id: result.insertId,
            name: name,
            email: email,
          },
          "request-date": requestDate,
        },
      };

      return res.status(200).json(responseData);
    } else {
      return res.status(500).json({ error: "Failed to create user" });
    }
  });
});

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
  
    const sql = "SELECT * FROM user WHERE id = ?";
    db.query(sql, [userId], (err, result) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ error: "Error querying data from the database" });
      }
  
      if (result.length === 0) {
        return res.status(403).json({ error: "User not found" });
      }
  
      const requestDate = new Date().toUTCString()
      const responseData = {
        data: {
          user: {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
          },
          'request-date': requestDate,
        },
      };
  
      return res.status(200).json(responseData);
    });
  });
