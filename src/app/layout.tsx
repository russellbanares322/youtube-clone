import { ContentWrapper } from "@/components/content-wrapper";
import "./globals.css";
import Providers from "./providers";
import { Head } from "next/document";

export const metadata = {
  title: "Youtube Clone",
  description: "Simple web application that mimics youtube.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
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
  );
};

export default RootLayout;
