/*
  Warnings:

  - You are about to drop the `Pending_Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Verified_Payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pending_Payment";

-- DropTable
DROP TABLE "Verified_Payment";

-- CreateTable
CREATE TABLE "Pending" (
    "id" SERIAL NOT NULL,
    "piece_db_id" INTEGER NOT NULL,
    "piece_title" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "international" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pending_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Verified" (
    "id" SERIAL NOT NULL,
    "piece_db_id" INTEGER NOT NULL,
    "piece_title" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "international" BOOLEAN NOT NULL DEFAULT false,
    "image_path" TEXT NOT NULL,
    "image_width" INTEGER NOT NULL,
    "image_height" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "stripe_id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Verified_pkey" PRIMARY KEY ("id")
);
