/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `Clerk` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clerkId]` on the table `Services` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Clerk_customerId_key" ON "Clerk"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Services_clerkId_key" ON "Services"("clerkId");
