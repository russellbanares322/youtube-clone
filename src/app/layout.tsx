import { ContentWrapper } from "@/components/content-wrapper";
import "./globals.css";
import Providers from "./providers";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Youtube Clone",
  description: "Simple web application that mimics youtube.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html>
        <Head>
          <title>{metadata?.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
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
