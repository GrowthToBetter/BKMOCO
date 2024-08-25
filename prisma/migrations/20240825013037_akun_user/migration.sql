/*
  Warnings:

  - You are about to drop the column `email` on the `akun_user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `akun_user` table. All the data in the column will be lost.
  - Added the required column `Gmail` to the `akun_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `akun_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `akun_user` DROP COLUMN `email`,
    DROP COLUMN `password`,
    ADD COLUMN `Gmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `Password` VARCHAR(191) NOT NULL;
