create table Order_products(
id serial primary key,
quantity integer not null,
order_id integer references Orders(id),
product_id integer references Products(id)
);