DROP TABLE IF EXISTS decks;
DROP TABLE IF EXISTS flashcard;

CREATE TABLE decks (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT
);
CREATE TABLE flashcard(
  id SERIAL PRIMARY KEY,
  question TEXT,
  answer TEXT,
  deck_id INT REFERENCES decks(id)

);
INSERT INTO decks(name,description) VALUES('REACT','REACT VOCAB DECK');



INSERT INTO flashcard(question,answer,deck_id) VALUES('What is REACT?','It is a lbirary using',1);
INSERT INTO flashcard(question,answer,deck_id) VALUES('What is a hook?','It is a way for us to make varriables passed through components',1);


-- to access data in the table use this command in SQL
-- SELECT*FROM decks INNER JOIN flashcard ON decks.id = deck_id;