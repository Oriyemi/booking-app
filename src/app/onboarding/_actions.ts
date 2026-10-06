"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function completeOnboarding(role: "customer" | "provider") {
  const { userId, sessionClaims } = await auth();
  if (!userId) return { error: "Not signed in" };

  // Only allow valid roles, and don't let people switch once set
  if (role !== "customer" && role !== "provider") {
    return { error: "Invalid role" };
  }
  if (sessionClaims?.metadata?.role) {
    return { error: "Role already set" };
  }

  try {
    const client = await clerkClient();
    await client.users.updateUserMetadata(userId, {
      publicMetadata: { role },
    });
    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}