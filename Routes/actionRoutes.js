const express = require('express');
const db = require('../data/helpers/actionModel.js');

const router = express.Router(); // notice the Uppercase R

router.get('/', (req, res) => {
  db.get()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.error(err);
    })
});

router.get('/:id', (req, res) => {
  db.get(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.error(err);
    })
});

router.post('/', (req, res) => {
  db.insert(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.error(err);
    })
});

router.put('/edit/:id', (req, res) => {
  db.update(req.params.id, req.body)
    .then((response) => {
      if (response === 0) {
        res.status(404).json({ message: 'The action with this ID does not exist' });
      }
      res.status(200).json({ message: `Action ID ${req.params.id} successfully edited.` });
    })
})

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
    .then((response) => {
      if (response === 0) {
        res.status(404).json({ message: 'The action with this ID does not exist' });
      }
      res.status(200).json({ message: `Action ID ${req.params.id} successfully deleted.` });
    })
})

module.exports = router;
