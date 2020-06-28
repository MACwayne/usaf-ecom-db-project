const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'ecomm',
  password: 'password',
  port: 5432,
})

/* 
 * users
 */
const getUsers = (request, response) => {

  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUser = (request, response) => {
  const id = parseInt(request.params.userId)

  pool.query('SELECT * FROM users WHERE userId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const updateUser = (request, response) => {
  const { userId, fname, lname, email } = request.body

  pool.query('UPDATE users SET fname = $1, lname = $2, email = $3 WHERE userId = $4 RETURNING *', [fname, lname, email, userId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User updated: ${results.rows[0].userid}`)
  })
}

const createUser = (request, response) => {
  const {fname, lname, email } = request.body

  pool.query('INSERT INTO users (fname , lname , email) VALUES ($1, $2, $3) RETURNING *', [fname, lname, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User created with ID: ${results.rows[0].userid}`)
  })
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.userId)

  // TODO check that user to be deleted exists

  pool.query('DELETE FROM users WHERE userId = $1 RETURNING *', [id], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(201).send(`Student deleted with ID: ${results.rows[0].userid}`)
  })
}


/* 
 * manufacturers
 */
const getManufacturers = (request, response) => {

  pool.query('SELECT * FROM manufacturers', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getManufacturer = (request, response) => {
  const id = parseInt(request.params.manufacturerId)

  pool.query('SELECT * FROM manufacturers WHERE manufacturerId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const updateManufacturer = (request, response) => {
  const { manufacturerId, companyName, contactName, contactEmail, contactPhone } = request.body

  pool.query('UPDATE manufacturers SET (companyName = $1, contactName = $2, contactEmail = $3, contactPhone = $4 WHERE userId = $5 RETURNING *', [companyName, contactName, contactEmail, contactPhone, manufacturerId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Manufacturers updated: ${results.rows[0].manufacturerid}`)
  })
}

const createManufacturer = (request, response) => {
  const{companyName, contactName, contactEmail, contactPhone} = request.body

  pool.query('INSERT INTO manufacturers (companyName , contactName , contactEmail, contactPhone) VALUES ($1, $2, $3, $4) RETURNING *', [companyName, contactName, contactEmail, contactPhone], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Manufacturers created with ID: ${results.rows[0].manufacturerid}`)
  })
}

const deleteManufacturer = (request, response) => {
  const id = parseInt(request.params.manufacturerId)

  // TODO check that user to be deleted exists
  
  pool.query('DELETE FROM manufacturers WHERE manufacturerId = $1 RETURNING *', [id], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(201).send(`Manufacturer deleted with ID: ${results.rows[0].manufacturerid}`)
  })
}

/* 
 * customers
 */
const getCustomers = (request, response) => {

  pool.query('SELECT * FROM customers', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCustomer = (request, response) => {
  const id = parseInt(request.params.customerId)

  pool.query('SELECT * FROM customers WHERE customerId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const updateCustomer = (request, response) => {
  const { customerId, companyName, contactName, contactEmail, contactPhone } = request.body

  pool.query('UPDATE customers SET (companyName = $1, contactName = $2, contactEmail = $3, contactPhone = $4 WHERE userId = $5 RETURNING *', [companyName, contactName, contactEmail, contactPhone, customerId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`customers updated: ${results.rows[0].customerid}`)
  })
}

const createCustomer = (request, response) => {
  const{companyName, contactName, contactEmail, contactPhone} = request.body

  pool.query('INSERT INTO customers (companyName , contactName , contactEmail, contactPhone) VALUES ($1, $2, $3, $4) RETURNING *', [companyName, contactName, contactEmail, contactPhone], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`customers created with ID: ${results.rows[0].customerid}`)
  })
}

const deleteCustomer = (request, response) => {
  const id = parseInt(request.params.customerId)

  // TODO check that user to be deleted exists
  
  pool.query('DELETE FROM customers WHERE customerId = $1 RETURNING *', [id], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(201).send(`customer deleted with ID: ${results.rows[0].customerid}`)
  })
}

/* 
 * items
 */
const getItems = (request, response) => {

  pool.query('SELECT * FROM items', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getItem = (request, response) => {
  const id = parseInt(request.params.itemId)

  pool.query('SELECT * FROM items WHERE itemId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const updateItem = (request, response) => {
  const { itemId, itemName, itemDescription} = request.body

  pool.query('UPDATE items SET itemName = $1, itemDescription = $2 WHERE itemId = $3 RETURNING *', [itemName, itemDescription, itemId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`item updated: ${results.rows[0].itemid}`)
  })
}

const createItem = (request, response) => {
  const {itemName, itemDescription} = request.body

  pool.query('INSERT INTO items (itemName , itemDescription) VALUES ($1, $2) RETURNING *', [itemName, itemDescription], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`item created with ID: ${results.rows[0].itemid}`)
  })
}

const deleteItem = (request, response) => {
  const id = parseInt(request.params.itemId)

  // TODO check that item to be deleted exists
  
  pool.query('DELETE FROM items WHERE itemId = $1 RETURNING *', [id], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(201).send(`item deleted with ID: ${results.rows[0].itemid}`)
  })
}

/* 
 * purchaseOrder
 */
const getPurchaseOrders = (request, response) => {

  pool.query('SELECT * FROM purchaseOrders', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPurchaseOrder = (request, response) => {
  const id = parseInt(request.params.purchaseOrderId)

  pool.query('SELECT * FROM purchaseOrders WHERE purchaseOrderId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const updatePurchaseOrder = (request, response) => {
  const { purchaseOrderId, manufacturerId, itemId, qty, purchaseDate, recievedDate } = request.body

  pool.query('UPDATE purchaseOrders SET manufacturerId = $1, itemId = $2, qty = $3, purchaseDate = $4, recievedDate = $5 WHERE purchaseOrderId = $6 RETURNING *', [manufacturerId, itemId, qty, purchaseDate, recievedDate, purchaseOrderId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`purchaseOrder updated: ${results.rows[0].purchaseorderid}`)
  })
}

const createPurchaseOrder = (request, response) => {
  const {fname, lname, email } = request.body

  pool.query('INSERT INTO purchaseOrders (manufacturerId , itemId , qty, purchaseDate, recievedDate) VALUES ($1, $2, $3, $4, $5) RETURNING *', [manufacturerId, itemId, qty, purchaseDate, recievedDate], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`purchaseOrder created with ID: ${results.rows[0].purchaseorderid}`)
  })
}

const deletePurchaseOrder = (request, response) => {
  const id = parseInt(request.params.purchaseOrderId)

  // TODO check that purchaseOrder to be deleted exists
  
  pool.query('DELETE FROM purchaseOrders WHERE purchaseOrderId = $1 RETURNING *', [id], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(201).send(`purchaseOrder deleted with ID: ${results.rows[0].purchaseorderid}`)
  })
}

/* 
 * saleOrder
 */
const getSaleOrders = (request, response) => {

  pool.query('SELECT * FROM saleOrders', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSaleOrder = (request, response) => {
  const id = parseInt(request.params.saleOrderId)

  pool.query('SELECT * FROM saleOrders WHERE saleOrderId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const updateSaleOrder = (request, response) => {
  const { saleOrderId, manufacturerId, itemId, qty, saleDate, recievedDate } = request.body

  pool.query('UPDATE saleOrders SET manufacturerId = $1, itemId = $2, qty = $3, saleDate = $4, recievedDate = $5 WHERE saleOrderId = $6 RETURNING *', [manufacturerId, itemId, qty, saleDate, recievedDate, saleOrderId], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`saleOrder updated: ${results.rows[0].saleorderid}`)
  })
}

const createSaleOrder = (request, response) => {
  const {fname, lname, email } = request.body

  pool.query('INSERT INTO saleOrders (manufacturerId , itemId , qty, saleDate, recievedDate) VALUES ($1, $2, $3, $4, $5) RETURNING *', [manufacturerId, itemId, qty, saleDate, recievedDate], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`saleOrder created with ID: ${results.rows[0].saleorderid}`)
  })
}

const deleteSaleOrder = (request, response) => {
  const id = parseInt(request.params.saleOrderId)

  // TODO check that saleOrder to be deleted exists
  
  pool.query('DELETE FROM saleOrders WHERE saleOrderId = $1 RETURNING *', [id], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(201).send(`saleOrder deleted with ID: ${results.rows[0].saleorderid}`)
  })
}

module.exports = {
  getUsers,getUser,updateUser,createUser,deleteUser,
  getManufacturers,getManufacturer,updateManufacturer,createManufacturer,deleteManufacturer,getCustomers,
  getCustomers,getCustomer,updateCustomer,createCustomer,deleteCustomer,
  getCustomers,getCustomer,updateCustomer,createCustomer,deleteCustomer,
  getItems,getItem,updateItem,createItem,deleteItem,
  getPurchaseOrders,getPurchaseOrder,updatePurchaseOrder,createPurchaseOrder,deletePurchaseOrder,
  getSaleOrders,getSaleOrder,updateSaleOrder,createSaleOrder,deleteSaleOrder
}