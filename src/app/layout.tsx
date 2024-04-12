import { ContentWrapper } from "@/components/content-wrapper";
import "./globals.css";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Youtube Clone",
  description: "Simple web application that mimics youtube.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      afterSignInUrl="/"
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
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
    </ClerkProvider>
  );
};

export default RootLayout;
