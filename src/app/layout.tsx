import { ContentWrapper } from "@/components/content-wrapper";
import "./globals.css";
import Providers from "./providers";
import Head from "next/head";

export const metadata = {
  title: "Create Next App",
  description: "Simple web application that mimics youtube.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Providers>
        <ContentWrapper>{children}</ContentWrapper>
      </Providers>
    </>
  );
};

export default RootLayout;
