module.exports = (sequelize, { Model, DataTypes }) => {
  class Product extends Model {

  }
  Product.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      // id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      discountPercentage: DataTypes.FLOAT,
      rating: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      brand: DataTypes.STRING,
      category: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      images: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "Product",
    },
  );
  return Product;
};
