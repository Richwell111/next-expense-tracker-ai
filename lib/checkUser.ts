import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (loggedInUser) {
    return loggedInUser;
  }

  // Use upsert instead of create to avoid duplicate email constraint errors
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

  return newUser;
};
