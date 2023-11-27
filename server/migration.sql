DROP TABLE IF EXISTS flashcard;
DROP TABLE IF EXISTS decks;

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
-- INSERT INTO decks(name,description) VALUES('Basic-JavaScript','Basic-JavaScript VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('HTML-CSS','HTML-CSS VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('CLI-Git-Github','CLI-Git-Github VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('DOM','DOM VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('DOM-Events','DOM-Events VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('DOM','DOM VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('JS-Event-Loop','JS-Event-Loop VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('AJAX-&-HTTP','AJAX-&-HTTP VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('Node-FS-HTTP-Express','Node-FS-HTTP-Express VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('ES6','ES6 VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('SQL-&-REST','SQL-&-REST VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('OOP-Part_1','OOP-Part_1 VOCAB DECK');
-- INSERT INTO decks(name,description) VALUES('OOP-Part_2 ','OOP-Part_2  VOCAB DECK');





-- INSERT INTO flashcard(question,answer,deck_id) VALUES('What is REACT?','It is a lbirary using',1);
-- INSERT INTO flashcard(question,answer,deck_id) VALUES('What is a hook?','It is a way for us to make varriables passed through components',1);
-- INSERT INTO flashcard(question,answer,deck_id) VALUES('What is POSTGRESQL','ANSWER',2);


-- to access data in the table use this command in SQL

-- SELECT*FROM decks INNER JOIN flashcard ON decks.id = deck_id;


--SELECT * FROM decks INNER JOIN flashcard ON decks.id = flashcard.deck_id WHERE decks.id = 1;