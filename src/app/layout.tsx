import { ContentWrapper } from "@/components/content-wrapper";
import "./globals.css";
import Providers from "./providers";
import ConvexClientProvider from "./ConvexClientProvider";

export const metadata = {
  title: "Youtube Clone",
  description: "Simple web application that mimics youtube.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          <Providers>
            <ContentWrapper>{children}</ContentWrapper>
          </Providers>
        </ConvexClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
