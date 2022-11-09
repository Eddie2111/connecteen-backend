/*
  Warnings:

  - You are about to alter the column `username` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(128)`.
  - You are about to alter the column `email` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(35)`.
  - You are about to alter the column `passowrd` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(65)`.
  - You are about to alter the column `fullname` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(35)`.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "username" SET DATA TYPE VARCHAR(128),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(35),
ALTER COLUMN "passowrd" SET DATA TYPE VARCHAR(65),
ALTER COLUMN "fullname" SET DATA TYPE VARCHAR(35);
