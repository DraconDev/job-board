export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/api/auth/:path*",
        "/postjob/:path*",
        "/dashboard/:path*",
        "/profile/:path*",
        "/admin/:path*",
        "/notifications/:path*",
    ],
};
