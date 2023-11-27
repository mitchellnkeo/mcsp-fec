import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(express.json());

app.get("/decks", (req, res) => {
  client
    .query("SELECT * FROM decks")
    .then((result) => {
      const rows = result.rows;
      res.send(rows);
    })
    .catch((error) => {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
    });
});

// app.get("/decks", (req, res) => {
//   client.query("SELECT * FROM decks").then((rows) => {
//     res.send(rows);
//   });
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
