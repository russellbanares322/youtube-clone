import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ["/", "/shorts", "/subscriptions"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};