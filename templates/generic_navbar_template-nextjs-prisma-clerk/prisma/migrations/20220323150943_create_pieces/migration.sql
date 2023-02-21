-- CreateTable
CREATE TABLE "Piece" (
    "id" SERIAL NOT NULL,
    "o_id" INTEGER NOT NULL,
    "class_name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image_path" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL DEFAULT false,
    "price" INTEGER NOT NULL,
    "real_width" INTEGER NOT NULL,
    "real_height" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Piece_pkey" PRIMARY KEY ("id")
);
