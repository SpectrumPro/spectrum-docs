// app/layout.tsx
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Good place for title/description, etc.
};

const banner = <Banner storageKey="966039a7-ae0b-4fce-90e5-cc8f55f418a5-welcome-banner-spectrum-docs">Welcome to the Spectrum Documentation</Banner>;
const navbar = <Navbar logo={<b>Spectrum</b>} />;
const footer = <Footer><a href="https://liamsherwin.com">Copyright © {new Date().getFullYear()} Liam Sherwin.</a></Footer>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout banner={banner} navbar={navbar} footer={footer} pageMap={await getPageMap()} docsRepositoryBase="https://github.com/SpectrumPro/spectrum-docs/tree/main/content">
          {children}
        </Layout>
      </body>
    </html>
  );
}
