// app/layout.tsx
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Good place for title/description, etc.
};

const banner = <Banner storageKey="release-banner">Nextra 4.0 is released</Banner>;
const navbar = <Navbar logo={<b>Nextra</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout banner={banner} navbar={navbar} footer={footer} pageMap={await getPageMap()}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
