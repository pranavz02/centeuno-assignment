
# Centeuno Assignment

This is an assignment to be submitted to Centeuno

## API Reference

#### Get all items

```http
  GET /api/products/list
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `size` | `number` | **Required**. No of objects on single page |
| `page` | `number` | **Required**. Page number |


#### Get item

```http
  GET /api/products/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of product to fetch |




## Run Locally

Clone the project

```bash
  git clone https://github.com/pranavz02/centeuno-assignment.git
```

Go to the project directory

```bash
  cd centeuno-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Authors

- [@pranavz02](https://www.github.com/pranavz02)

