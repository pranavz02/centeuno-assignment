import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function Product() {
  try {
    const fileData = await fs.readFile(path.join(__dirname, 'item_list.json'), 'utf-8');
    const productList = JSON.parse(fileData);
    return productList;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
}
export default Product;
