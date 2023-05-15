/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Product`;

-- CreateTable
CREATE TABLE `Products` (
    `code` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `cost_price` FLOAT NOT NULL,
    `sales_price` FLOAT NOT NULL,

    UNIQUE INDEX `Products_code_key`(`code`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
