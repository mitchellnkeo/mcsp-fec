import express from "express";
import pg from "pg";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.get("/api/decks", (req, res) => {
  sql`SELECT * FROM decks`
    .then((rows) => {
      // const rows = result.rows;

      console.log("here");
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
