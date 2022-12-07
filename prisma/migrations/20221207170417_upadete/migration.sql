/*
  Warnings:

  - The primary key for the `Clerk` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clerk" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" TEXT NOT NULL,
    "customerId" TEXT,
    CONSTRAINT "Clerk_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Clerk" ("customerId", "email", "id", "isAdmin", "name", "password") SELECT "customerId", "email", "id", "isAdmin", "name", "password" FROM "Clerk";
DROP TABLE "Clerk";
ALTER TABLE "new_Clerk" RENAME TO "Clerk";
CREATE UNIQUE INDEX "Clerk_email_key" ON "Clerk"("email");
CREATE TABLE "new_Services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "customerId" TEXT,
    "clerkId" TEXT,
    CONSTRAINT "Services_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Services_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "Clerk" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Services" ("clerkId", "customerId", "id", "name", "type") SELECT "clerkId", "customerId", "id", "name", "type" FROM "Services";
DROP TABLE "Services";
ALTER TABLE "new_Services" RENAME TO "Services";
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Customer" ("address", "cpf", "createdAt", "email", "id", "name", "password", "updatedAt") SELECT "address", "cpf", "createdAt", "email", "id", "name", "password", "updatedAt" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
CREATE UNIQUE INDEX "Customer_cpf_key" ON "Customer"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
