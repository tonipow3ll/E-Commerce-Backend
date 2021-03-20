const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// =================
// GET REQEUSTS
// =================
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// =================
// POST REQEUSTS
// =================

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err)
  }
});

// =================
// PUT REQEUSTS
// =================

  router.put('/:id', (req, res) => {
    try{
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!req.body) {
      res.status(404).json({ message: 'No Category found with this ID' })
      return;
    }
    res.status(200).json({ message: 'Category Updated!'})
  } catch (err) {
    res.status(500).json(err)
  }
});

// =================
// DELETE REQEUSTS
// =================

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this ID' })
      return;
    }
    res.status(200).json({ message: 'Category deleted! '});
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
