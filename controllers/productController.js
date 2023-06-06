import Product from '../productList.js'
import asyncHandler from 'express-async-handler'

const getProducts = asyncHandler(async (req, res) => {
    try {
      const productList = await Product();
  
      if (Array.isArray(productList)) {
        const { size, page } = req.query;
        const pageSize = parseInt(size);
        const offset = (page - 1) * pageSize;
  
        const items = productList.slice(offset, offset + pageSize).map(item => ({
          id: item.id,
          item_name: item.item_name,
          item_image: item.item_image,
          item_price: item.item_price
        }));
  
        res.json(items);
      } else {
        res.status(500).json({ message: 'Error retrieving product list' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving product list', error });
    }
});
  

const getProductById = asyncHandler(async (req, res) => {
    const productList = await Product();
    const productID = parseInt(req.params.id)
  
    const product = productList.find(obj => obj.id === productID);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
});

export {getProducts, getProductById}