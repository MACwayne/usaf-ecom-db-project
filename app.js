const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'USAF E-COMM Project 1.0' })
})

app.get('/users', db.getUsers)
app.get('/users/:userId', db.getUser)
app.post('/users/update', db.updateUser)
app.post('/users/create', db.createUser)
app.delete('/users/:userId', db.deleteUser)

app.get('/manufacturers', db.getManufacturers)
app.get('/manufacturers/:manufacturerId', db.getManufacturer)
app.post('/manufacturers/update', db.updateManufacturer)
app.post('/manufacturers/create', db.createManufacturer)
app.delete('/manufacturers/:manufacturerId', db.deleteManufacturer)

app.get('/customers', db.getCustomers)
app.get('/customers/:customerId', db.getCustomer)
app.post('/customers/update', db.updateCustomer)
app.post('/customers/create', db.createCustomer)
app.delete('/customers/:customerId', db.deleteCustomer)

app.get('/items', db.getItems)
app.get('/items/:itemId', db.getItem)
app.post('/items/update', db.updateItem)
app.post('/items/create', db.createItem)
app.delete('/items/:itemId', db.deleteItem)

app.get('/purchaseorders', db.getPurchaseOrders)
app.get('/purchaseorders/:purchaseOrderId', db.getPurchaseOrder)
app.post('/purchaseorders/update', db.updatePurchaseOrder)
app.post('/purchaseorders/create', db.createPurchaseOrder)
app.delete('/purchaseorders/:purchaseOrderId', db.deletePurchaseOrder)

app.get('/saleorders', db.getSaleOrders)
app.get('/saleorders/:saleOrderId', db.getSaleOrder)
app.post('/saleorders/update', db.updateSaleOrder)
app.post('/saleorders/create', db.createSaleOrder)
app.delete('/saleorders/:saleOrderId', db.deleteSaleOrder)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})