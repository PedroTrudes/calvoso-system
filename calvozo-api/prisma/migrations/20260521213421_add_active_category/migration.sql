-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id_FK` INTEGER NULL,
    `product_variation_id_FK` INTEGER NULL,
    `amount` INTEGER NOT NULL,
    `unit_price` DECIMAL(10, 2) NOT NULL,
    `order_status` VARCHAR(50) NOT NULL,
    `observation` VARCHAR(100) NULL,

    INDEX `order_id_FK`(`order_id_FK`),
    INDEX `product_variation_id_FK`(`product_variation_id_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ordered` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creatAt` DATETIME(0) NOT NULL,
    `status_operation` VARCHAR(50) NOT NULL,
    `identifier` VARCHAR(50) NOT NULL,
    `total_price` DECIMAL(10, 2) NOT NULL,
    `type_order_FK` INTEGER NULL,

    INDEX `type_order_FK`(`type_order_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `menu_active` BOOLEAN NOT NULL,
    `category_id_FK` INTEGER NULL,

    INDEX `category_id_FK`(`category_id_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_variation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id_FK` INTEGER NULL,
    `name` VARCHAR(100) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `variation_active` BOOLEAN NOT NULL,

    INDEX `product_id_FK`(`product_id_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_type` VARCHAR(50) NOT NULL,
    `charge` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order_item` ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`product_variation_id_FK`) REFERENCES `product_variation`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_item` ADD CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`order_id_FK`) REFERENCES `ordered`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ordered` ADD CONSTRAINT `ordered_ibfk_1` FOREIGN KEY (`type_order_FK`) REFERENCES `type_order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id_FK`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product_variation` ADD CONSTRAINT `product_variation_ibfk_1` FOREIGN KEY (`product_id_FK`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
