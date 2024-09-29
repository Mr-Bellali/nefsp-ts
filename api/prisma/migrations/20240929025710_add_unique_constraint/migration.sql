/*
  Warnings:

  - A unique constraint covering the columns `[idProduct,idProfile]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Product_idProduct_idProfile_key` ON `Product`(`idProduct`, `idProfile`);
