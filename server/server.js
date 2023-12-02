import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client({
  connectionString: DATABASE_URL,
});
// const sql = postgres(process.env.DATABASE_URL);
await client.connect();
const app = express();

app.get("/api/decks", (req, res) => {
  client
    .query("SELECT * FROM decks")
    .then((rows) => {
      // const rows = result.rows;
      res.send(rows.rows);
    })
    .catch((error) => {
      console.error("Error executing query:", error);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/api/deck/:id", (req, res) => {
  const deckId = Number.parseInt(req.params.id);
  client
    .query(`Select * From flashcard WHERE flashcard.deck_id = $1`, [deckId])
    .then((data) => {
      if (data.rows.length == 0) {
        res.sendStatus(404);
        return;
      }
      res.json(data.rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
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