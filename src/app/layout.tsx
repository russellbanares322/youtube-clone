import { ContentWrapper } from "@/components/content-wrapper";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Youtube Clone",
  description: "Simple web application that mimics youtube.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
