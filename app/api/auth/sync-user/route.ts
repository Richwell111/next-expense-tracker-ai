import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Check if user already exists by clerkUserId
    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (existingUser) {
      return NextResponse.json(existingUser);
    }

    // If user doesn't exist, create a new one with upsert to avoid duplicate email errors
    const newUser = await db.user.upsert({
      where: {
        clerkUserId: user.id,
      },
      update: {
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        imageUrl: user.imageUrl || null,
      },
      create: {
        clerkUserId: user.id,
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        imageUrl: user.imageUrl || null,
        email: user.emailAddresses[0]?.emailAddress || `clerk_${user.id}@temp.local`,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Sync user error:", error);
    return NextResponse.json(
      { error: "Failed to sync user" },
      { status: 500 }
    );
  }
}
