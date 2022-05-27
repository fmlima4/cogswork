-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "location" TEXT,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);
