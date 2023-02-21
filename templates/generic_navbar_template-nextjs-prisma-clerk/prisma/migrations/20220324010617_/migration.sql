/*
  Warnings:

  - You are about to alter the column `description` on the `Piece` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.

*/
-- AlterTable
ALTER TABLE "Piece" ALTER COLUMN "description" SET DATA TYPE VARCHAR(500);
