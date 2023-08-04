const {Product} = require("../src/models");
const data = require('../data/products.json');

beforeAll(() => {
  });
  
afterAll(() => {
});

test('should create "Product"', async () => {
  for (const product of data.products) {
    const { 
      title, description, price, discountPercentage, 
      rating, stock, brand, category, thumbnail, images,
    } = product;
    const dbEntity = await Product.create({
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    });

    expect(dbEntity.title).toBe(title);
    expect(dbEntity.description).toBe(description);
  }
});
