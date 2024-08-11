/*
  Warnings:

  - You are about to drop the `datalaporan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `datalaporan`;

-- CreateTable
CREATE TABLE `data_Laporan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nama` VARCHAR(191) NOT NULL,
    `Kelas` VARCHAR(191) NOT NULL,
    `NoAbsen` INTEGER NOT NULL,
    `Laporan` VARCHAR(191) NOT NULL,
    `BuktiLaporan` VARCHAR(191) NOT NULL,
    `Keterangan` VARCHAR(191) NOT NULL,
    `NoTelepon` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
