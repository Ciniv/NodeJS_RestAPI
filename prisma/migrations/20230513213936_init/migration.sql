-- CreateTable
CREATE TABLE `Product` (
    `code` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `cost_price` FLOAT NOT NULL,
    `sales_price` FLOAT NOT NULL,

    UNIQUE INDEX `Product_code_key`(`code`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
