import express from 'express'
import productRoute from './routes/productRoute.js'
const PORT = 3000
const app = express()

app.use(express.json())

app.use('/api/products', productRoute)
app.get('/', (req, res) => {
    res.status(200).json({
      message: `Server is up and running on port ${PORT}`,
    });
});

app.listen(
    PORT,
    console.log(
      `Server running in mode on port ${PORT}`
    )
  )