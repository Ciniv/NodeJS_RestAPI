-- CreateTable
CREATE TABLE `Packs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pack_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `qty` TINYINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Packs` ADD CONSTRAINT `Packs_pack_id_fkey` FOREIGN KEY (`pack_id`) REFERENCES `Products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Packs` ADD CONSTRAINT `Packs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
