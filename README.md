# Express-note-taker

## Description

This application can be used to write, save, and delete notes. It uses an express backend and save and retrieve note data from a JSON file.

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.
User should be able to write and save notes, read and delete previously saved notes.

## Usage

This application is a task tracker. In the browser, type a task with details, then click save. You will see your task appear on the left hand side of the webpage. When you have completed your task, click the delete icon to remove the task from the task list.

## Design Notes

- The following HTML routes are created:

  - GET `/notes` - Should return the `notes.html` file.

  - GET `*` - Should return the `index.html` file

- The application has a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

- The following API routes were created:

  - GET `/api/notes` - reads the `db.json` file and return all saved notes as JSON. Ech note will have a unique id generated by through uuid package installed with NPM.

  - POST `/api/notes` - receives a new note to save on the request body, adds it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - receives a query parameter containing the id of a note to delete. Each note has a unique `id` when it's saved. In order to delete a note, it reads all notes from the `db.json` file, removes the note with the given `id` property, and then rewrites the notes to the `db.json` file.

## Installation

Install the following NPM Packages: express, util, and uuid (unique ID generator).

## Link to the Deployed App

https://express-note-taker-2020.herokuapp.com/

## Link to GitHub Page

https://github.com/agorelik2/express-note-taker
