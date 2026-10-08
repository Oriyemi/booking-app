"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function completeOnboarding(role: "CUSTOMER" | "PROVIDER") {
  const { userId } = await auth();
  if (!userId) return { error: "Not signed in" };

  if (role !== "CUSTOMER" && role !== "PROVIDER") {
    return { error: "Invalid role" };
  }

  try {
    const client = await clerkClient();
    await client.users.updateUserMetadata(userId, {
      publicMetadata: { onboardingComplete: true, role },
    });
    return { success: true };
  } catch {
    return { error: "Could not save your choice. Try again." };
  }
}