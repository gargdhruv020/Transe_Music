import { NextRequest } from "next/server";
import crypto from "crypto";

export const USER_COOKIE_NAME = "transe_uid";

/**
 * Extracts or generates a unique, isolated user ID from the request cookies or headers.
 */
export function getOrCreateUserId(request: NextRequest): { userId: string; isNew: boolean } {
  // 1. Check custom authorization header
  const authHeader = request.headers.get("x-user-id") || request.headers.get("authorization");
  if (authHeader) {
    const cleanId = authHeader.replace(/^Bearer\s+/i, "").trim();
    if (cleanId.length >= 8 && cleanId.length <= 128) {
      return { userId: cleanId, isNew: false };
    }
  }

  // 2. Check secure cookie
  const cookieVal = request.cookies.get(USER_COOKIE_NAME)?.value;
  if (cookieVal && cookieVal.length >= 8 && cookieVal.length <= 128) {
    return { userId: cookieVal, isNew: false };
  }

  // 3. Generate a new secure UUIDv4 for this user session
  const newUserId = crypto.randomUUID();
  return { userId: newUserId, isNew: true };
}
