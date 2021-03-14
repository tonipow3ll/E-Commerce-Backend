// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {

})

// Categories have many Products
Category.belongsToMany(Product, {

})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {

})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {

})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
