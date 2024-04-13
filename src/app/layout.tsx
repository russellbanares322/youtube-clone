import { ContentWrapper } from "@/components/content-wrapper";
import "./globals.css";
import Providers from "./providers";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

export const metadata = {
  title: "Youtube Clone",
  description: "Simple web application that mimics youtube.",
};

const { NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, NEXT_PUBLIC_CONVEX_URL } =
  process.env;

const convex = new ConvexReactClient(NEXT_PUBLIC_CONVEX_URL as string);

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      afterSignInUrl="/"
      publishableKey={NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <html>
          <head>
            <title>{metadata?.title}</title>
            <meta name="description" content={metadata.description} />
          </head>
          <body>
            <Providers>
              <ContentWrapper>{children}</ContentWrapper>
            </Providers>
          </body>
        </html>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default RootLayout;
