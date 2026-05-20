INSERT INTO category (name)
VALUES
('Hamburguer'),
('Pizza'),
('Bebida'),
('Porção'),
('Marmitex');

INSERT INTO product
(name, description, menu_active, category_id_FK)
VALUES
('X-Burguer', 'Hamburguer tradicional com queijo', true, 1),
('X-Salada', 'Hamburguer com queijo e salada', true, 1),
('Pizza Calabresa', 'Pizza de calabresa com cebola', true, 2),
('Coca-Cola', 'Refrigerante Coca-Cola', true, 3),
('Batata Frita', 'Porção de batata frita crocante', true, 4),
('Marmita Fitness', 'Arroz integral, frango e legumes', true, 5);


INSERT INTO product_variation
(product_id_FK, name, price, variation_active)
VALUES
-- X-Burguer
(1, 'Simples', 18.90, true),
(1, 'Duplo', 24.90, true),
-- X-Salada
(2, 'Simples', 20.90, true),
-- Pizza
(3, 'Pequena', 39.90, true),
(3, 'Grande', 59.90, true),
-- Coca
(4, 'Lata 350ml', 6.00, true),
(4, '2 Litros', 14.00, true),
-- Batata
(5, 'Pequena', 15.00, true),
(5, 'Grande', 25.00, true),
-- Marmita
(6, '500g', 22.00, true),
(6, '750g', 28.00, true);

INSERT INTO type_order
(name_type, charge)
VALUES
('Mesa', 0),
('Delivery', 8.00),
('Retirada', 0),
('Balcao', 0);

INSERT INTO ordered
(creatAt, status_operation, identifier, total_price, type_order_FK)
VALUES

(
NOW(),
'fazendo',
'Pedido Mesa 10',
64.80,
1
),

(
NOW(),
'pendente',
'Delivery João',
73.90,
2
),

(
NOW(),
'pronto',
'Retirada Marcos',
39.90,
3
);

INSERT INTO order_item
(order_id_FK, product_variation_id_FK, amount, unit_price, order_status, observation)
VALUES
-- Pedido 1
(1, 2, 2, 24.90, 'fazendo', 'Sem cebola'),
(1, 6, 1, 15.00, 'pendente', NULL),
-- Pedido 2
(2, 5, 1, 59.90, 'fazendo', 'Massa fina'),
(2, 7, 1, 14.00, 'pendente', 'Gelada'),
-- Pedido 3
(3, 4, 1, 39.90, 'pronto', NULL);