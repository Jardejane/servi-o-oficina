/*
  Warnings:

  - You are about to drop the column `customerId` on the `Clerk` table. All the data in the column will be lost.
  - You are about to drop the column `clerkId` on the `Services` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Clerk" DROP CONSTRAINT "Clerk_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_clerkId_fkey";

-- DropIndex
DROP INDEX "Clerk_customerId_key";

-- DropIndex
DROP INDEX "Services_clerkId_key";

-- AlterTable
ALTER TABLE "Clerk" DROP COLUMN "customerId";

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "clerkId";

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customerId" TEXT,
    "clerkId" TEXT,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OrderToServices" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToServices_AB_unique" ON "_OrderToServices"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToServices_B_index" ON "_OrderToServices"("B");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "Clerk"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToServices" ADD CONSTRAINT "_OrderToServices_A_fkey" FOREIGN KEY ("A") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToServices" ADD CONSTRAINT "_OrderToServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
