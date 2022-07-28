const { Router } = require('express');
const Horse = require('../models/horses');
const router = Router();

router
  .get('/:id', async (req, res) => {
    const horse = await Horse.getById(req.params.id);
    res.json(horse);
  })
  .get('/', async (req, res) => {
    const horse = await Horse.getAll();
    console.log(horse);
    res.json(horse);
  });

module.exports = router;
