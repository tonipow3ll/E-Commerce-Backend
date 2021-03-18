// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
foreignKey: 'category_id',
through: {
  model: Category,
  unique: false
  },
   as: 'product_id'
});

// Categories have many Products
Category.belongsToMany(Product, {
  foreignKey: 'product_id',
through: {
  model: Product,
  unique: false,
  },
  // as: 'category'
});

// Products belongToMany Tags (through ProductTag)
// foreignKey: 'productTag_id', duplicate column error
// foreignKey: 'product_id', failed to open referenced table 'tag' error 
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: {
    model: ProductTag,
    unique: true,
  },
  // as: 'product_id'

});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foreignKey: 'tag_id',
through: {
  model: ProductTag,
  unique: true,
},
// as: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
