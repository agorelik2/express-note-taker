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
    let noteId = uuidv4();
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: noteId,
    };
};
