create database calvozo;
use calvozo;

create table category(
id int primary key auto_increment,
name varchar(100) not null);

create table product
(
id int primary key auto_increment,
name varchar(100) not null,
description TEXT,
menu_active boolean not null,
category_id_FK int,

FOREIGN KEY (category_id_FK) REFERENCES category(id)
);


CREATE TABLE product_variation(
id int primary key auto_increment,
product_id_FK int,
name varchar(100) not null,
price decimal(10,2) not null,
variation_active boolean not null,

FOREIGN KEY	(product_id_FK) REFERENCES product(id)
);

CREATE TABLE type_order(
	id int primary key auto_increment,
    name_type varchar(50) not null,
    charge decimal (10,2)
);

CREATE TABLE ordered(
	id int primary key auto_increment,
    creatAt datetime not null,
    status_operation varchar(50) not null,
    identifier varchar(50) not null,
    total_price decimal(10,2) not null,
    type_order_FK int,
    
    FOREIGN KEY (type_order_FK) REFERENCES type_order(id)
);

CREATE TABLE order_item(
id int primary key auto_increment,
order_id_FK int,
product_variation_id_FK int,
amount int not null,
unit_price decimal(10,2) not null,
order_status varchar(50) not null,
observation varchar(100),

FOREIGN KEY (product_variation_id_FK) REFERENCES product_variation(id),
FOREIGN KEY (order_id_fk) REFERENCES ordered(id)
);

