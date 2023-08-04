const { Product } = require("../models");

module.exports = {
  findAll(req, res) {
    return Product.findAll({
      order: [["createdAt", "DESC"]],
    })
      .then((products) => res.status(200).send(products))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  findOne(req, res) {
    return Product.findByPk(req.params.id)
      .then((product) => {
        if (!product) {
          return res.status(404).send({
            message: "Product Not Found",
          });
        }
        return res.status(200).send(product);
      })
      .catch((error) => res.status(400).send(error));
  },

  create(req, res) {
    const { 
      title, description, price, discountPercentage, 
      rating, stock, brand, category, thumbnail, images,
    } = req.body.product;
    return Product.create({
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    })
      .then((product) => res.status(201).send(product))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Product.findByPk(req.params.id)
      .then((product) => {
        if (!product) {
          return res.status(404).send({
            message: "Product Not Found",
          });
        }
        const { id, title, description} = req.body.product;
        return product
          .update({
            // id,
            title,
            description,
          })
          .then((product) => res.status(200).send(product))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Product.findByPk(req.params.id)
      .then((product) => {
        if (!product) {
          return res.status(400).send({
            message: "Product Not Found",
          });
        }
        return product
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
