export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "customer" | "provider";
    };
  }
}