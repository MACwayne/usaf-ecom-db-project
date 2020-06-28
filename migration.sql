DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS manufacturers;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS purchaseOrders;
DROP TABLE IF EXISTS salesOrders;

CREATE TABLE users (
    userId serial,
    fname text,
    lname text,
    email text
);

INSERT INTO users (fname, lname, email) VALUES ('Mac', 'Kane', 'Mac@Kane.com');
INSERT INTO users (fname, lname, email) VALUES ('Tim', 'Nelson', 'Tim@Nelson.com');
INSERT INTO users (fname, lname, email) VALUES ('Jack', 'Karvo', 'Jack@Karvo.com');


CREATE TABLE manufacturers (
    manufacturerId serial,
    companyName text,
    contactName text,
    contactEmail text,
    contactPhone text
);

INSERT INTO manufacturers (companyName, contactName, contactEmail, contactPhone) VALUES ('Lego', 'Ben M.', 'BenM@gmail.com', '651-650-5340');
INSERT INTO manufacturers (companyName, contactName, contactEmail, contactPhone) VALUES ('Pizza', 'John X.', 'JohnX@gmail.com', '233-322-5222');
INSERT INTO manufacturers (companyName, contactName, contactEmail, contactPhone) VALUES ('Steel', 'Rick H.', 'RickH@gmail.com', '931-530-5660');

CREATE TABLE customers (
    customerId serial,
    companyName text,
    contactName text,
    contactEmail text,
    contactPhone text
);

INSERT INTO customers (companyName, contactName, contactEmail, contactPhone) VALUES ('Leaf Inc', 'Mary H.', 'MaryH@gmail.com', '444-444-4444');
INSERT INTO customers (companyName, contactName, contactEmail, contactPhone) VALUES ('Pots Inc', 'Joey B.', 'JoeyB@gmail.com', '333-333-3333');
INSERT INTO customers (companyName, contactName, contactEmail, contactPhone) VALUES ('Knives Inc', 'Sue V.', 'SuV@gmail.com', '555-555-5555');

CREATE TABLE items (
    itemId serial,
    itemName text,
    itemDescription text
);

INSERT INTO items (itemName, itemDescription) VALUES ('Bubble Gum', 'Chewy');
INSERT INTO items (itemName, itemDescription) VALUES ('Lego set 1', 'Car');
INSERT INTO items (itemName, itemDescription) VALUES ('Lego set 2', 'Truck');
INSERT INTO items (itemName, itemDescription) VALUES ('GameBoy', 'Handheld gaming system');


CREATE TABLE purchaseOrders (
    purchaseOrderId serial,
    manufacturerId integer,
    itemId integer,
    qty integer,
    purchaseDate text,
    recievedDate text
);

INSERT INTO purchaseOrders (manufacturerId, itemId, qty, purchaseDate, recievedDate) VALUES (1, 1, 50, '20 June 2020', 'pending');
INSERT INTO purchaseOrders (manufacturerId, itemId, qty, purchaseDate, recievedDate) VALUES (2, 3, 50, '21 June 2020', 'pending');

CREATE TABLE saleOrders (
    salesOrderId serial,
    customerId integer,
    itemId integer,
    qty integer,
    purchaseDate text,
    recievedDate text
);

INSERT INTO saleOrders (customerId, itemId, qty, purchaseDate, recievedDate) VALUES (1, 1, 50, '20 June 2020', 'pending');
INSERT INTO saleOrders (customerId, itemId, qty, purchaseDate, recievedDate) VALUES (2, 3, 50, '21 June 2020', 'pending');