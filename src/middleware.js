export { default } from "next-auth/middleware";

/* PROTECTION ON THE ROUTE */
export const config = { matcher: ["/pcBuilder"] };
