create table Orders(
id serial primary key,
user_id integer references Users(id),
status varchar(7) not null
);