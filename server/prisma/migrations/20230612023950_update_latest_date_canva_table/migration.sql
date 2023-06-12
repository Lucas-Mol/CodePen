/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Canva` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Canva" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "latestDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Canva" ("fileUrl", "id", "name") SELECT "fileUrl", "id", "name" FROM "Canva";
DROP TABLE "Canva";
ALTER TABLE "new_Canva" RENAME TO "Canva";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
