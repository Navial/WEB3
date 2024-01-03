const express = require("express");
const router = express.Router();
const Person = require("../models/person"); // Assurez-vous que le chemin est correct

// GET ALL PERSONS
router.get("/api/persons", (request, response) => {
  Person.find({})
    .then((persons) => {
      response.json(persons);
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ error: "internal server error" });
    });
});

router.get("/api/persons/:id", (request, response) => {
  const idParam = request.params.id;

  Person.findById(idParam)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).json({ error: "person not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ error: "internal server error" });
    });
});

router.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;

  Person.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        response.status(204).end(); // 204 No Content, succès sans contenu à renvoyer
      } else {
        response.status(404).json({ error: "person not found" }); // 404 Not Found si l'ID n'existe pas
      }
    })
    .catch((error) => {
      console.error(error);
      response.status(500).json({ error: "internal server error" }); // 500 Internal Server Error pour les autres erreurs
    });
});

router.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: "name or number missing" });
  }

  const person = new Person({
    name: body.name,
    number: body.number || false,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

module.exports = router;
