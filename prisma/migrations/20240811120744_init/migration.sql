-- CreateTable
CREATE TABLE `User` (
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
