const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    // const { id } = req.params;
    const tagData = await Tag.findByPk(req.params.id, {
      // works with this commented out
      //  include: [{ model: ProductTag, through: Tag, as: 'id' }]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post works
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
    } catch (err) {
      res.status(400).json(err)
    }
});

// put works 
router.put('/:id', (req, res) => {
  try{
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!req.body) {
      res.status(404).json({ message: 'No Category found with this ID' })
      return;
    }
    res.status(200).json({ message: 'Tag Updated!'})
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
    try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No Category found with this ID' })
      return;
    }
    res.status(200).json({ message: 'Sucessfully deleted' });
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
