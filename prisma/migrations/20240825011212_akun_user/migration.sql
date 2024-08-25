/*
  Warnings:

  - You are about to drop the column `Gmail` on the `akun_user` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `akun_user` table. All the data in the column will be lost.
  - Added the required column `email` to the `akun_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `akun_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `akun_user` DROP COLUMN `Gmail`,
    DROP COLUMN `Password`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
