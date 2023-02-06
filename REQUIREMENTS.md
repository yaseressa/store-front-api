# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index `'/products' [GET]`
- Show (args: product id) `'/products/:id' [GET]`
- Create (args: Product)[token required] `'/products' [POST]`
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required] `'/users' [GET]`
- Show (args: id)[token required] `'/users/:id' [GET]`
- Create (args: User)[token required] `'/users' [POST]`

#### Orders

- Current Order by user (args: user id)[token required] `'/current/:id' [GET]`
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Products

- id
- name
- price
- [OPTIONAL] category

```
Table: Products (id:serial[primary key], name:text[not null], price:varchar(10)[not null], category:varchar(30))
```

#### Users

- id
- firstname
- lastname
- password

```
Table: Users (id:serial[primary key], firstname:varchar(10)[not null], lastname:varchar(10)[not null], password:varchar(50)[not null])
```

#### Orders

- id
- user_id
- status of order (active or complete)

```
Table: Orders (id:serial[primary key], user_id:integer(foreign key to users table),  status:varchar(7)[not null])
```

#### Order_products

- id
- order_id
- product_id
- quantity of each product in the order

```
Table: Order_products(id:serial[primary key], order_id:integer(foreign key to Orders table), product_id:integer(foreign key to products table), quantity:integer[not null])

```
