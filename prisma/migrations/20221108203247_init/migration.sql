-- CreateTable
CREATE TABLE "Verification" (
    "email" VARCHAR(35) NOT NULL,
    "code" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "expiredAt" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Verification_email_key" ON "Verification"("email");
