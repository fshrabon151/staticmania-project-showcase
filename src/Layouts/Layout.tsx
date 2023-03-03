import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
type Props = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = ({ children, title }) => {
  const pageTitle = title ? `{Finsweet - ${title}` : "{Finsweet";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key={pageTitle} />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
