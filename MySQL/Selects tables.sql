-- Select por nome da categoria
SELECT
p.id,
p.name AS product,
c.name AS category
FROM product p
INNER JOIN category c
ON p.category_id_FK = c.id WHERE c.name = "pizza";

SELECT
p.id,
p.name AS product,
c.name AS category
FROM product p
INNER JOIN category c
ON p.category_id_FK = c.id;

-- Buscando por id
SELECT
pv.id,
p.name AS product,
pv.name AS variation,
pv.price
FROM product_variation pv
INNER JOIN product p
ON pv.product_id_FK = p.id where p.id = 3;

SELECT
pv.id,
p.name AS product,
pv.name AS variation,
pv.price
FROM product_variation pv
INNER JOIN product p
ON pv.product_id_FK = p.id;
Select * from category;
SELECT
o.id,
o.name_order,
o.total_price,
o.creatAt,
t.name_type
FROM ordered o
INNER JOIN type_order t
ON o.type_order_FK = t.id;

SELECT
oi.id,
oi.order_status,
o.total_price,
o.name_order,
p.name AS product,
pv.name AS variation,
oi.amount,
oi.unit_price
FROM order_item oi
INNER JOIN ordered o
ON oi.order_id_FK = o.id
INNER JOIN product_variation pv
ON oi.product_variation_id_FK = pv.id
INNER JOIN product p
ON pv.product_id_FK = p.id;

select * from ordered o inner join type_order typ on o.type_order_FK = typ.id where typ.charge > 0.00;


select * from order_item;