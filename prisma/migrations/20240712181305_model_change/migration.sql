/*
  Warnings:

  - You are about to drop the column `refereeEmail` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `refereeName` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referrerEmail` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referrerName` on the `referral` table. All the data in the column will be lost.
  - Added the required column `course` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referredEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referredName` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` DROP COLUMN `refereeEmail`,
    DROP COLUMN `refereeName`,
    DROP COLUMN `referrerEmail`,
    DROP COLUMN `referrerName`,
    ADD COLUMN `course` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `referredEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `referredName` VARCHAR(191) NOT NULL;
