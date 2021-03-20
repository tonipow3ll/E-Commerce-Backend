const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// =================
// GET REQEUSTS
// =================
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const productData = await Tag.findByPk(req.params.id, {
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// =================
// POST REQEUSTS
// =================
router.post('/', async (req, res) => {
  try {
    const product = await Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
    })
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err)
  }
});


// =================
// PUT REQEUSTS
// =================
router.put('/:id', (req, res) => {
  try {
    Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!req.body) {
      res.status(404).json({ message: 'No product found with this ID!' })
      return;
    }
    res.status(200).json({ message: 'Product updated!' })
  } catch (err) {
    res.status(500).json(err)
  }
});


// =================
// DELETE REQEUSTS
// =================

router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!productData) {
      res.status(404).json({ message: 'No Category found with this ID' })
      return;
    }
    res.status(200).json({ message: 'Sucessfully deleted' });
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
