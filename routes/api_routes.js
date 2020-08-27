const fs = require("fs");
let { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (error, data) => {
      if (error) {
        throw error;
      }
      res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req, res) => {
    const noteId = uuidv4();
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: noteId,
    };
    fs.readFile("./db/db.json", "utf-8", (error, noteData) => {
      console.log("Test");
      if (error) {
        return console.log(`this is a line 24 ${error}`);
      }

      const notesArray = JSON.parse(noteData);
      notesArray.push(newNote);
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(notesArray, null, 2),
        (err) => {
          if (err) throw err;

          res.send(notesArray);
          console.log(notesArray, "Successfully wrote file");
        }
      );
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
    fs.readFile("./db/db.json", "utf-8", (error, noteData) => {
      const notesArray = JSON.parse(noteData);
      const updatedNoteData = notesArray.filter((note) => note.id != noteId);
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(updatedNoteData, null, 2),
        (err) => {
          if (err) throw err;
          res.send(updatedNoteData);
        }
      );
    });
  });
};
