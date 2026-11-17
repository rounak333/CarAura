import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURA DUBAI | Luxury & Exotic Car Rental",
  description:
    "Curated fleet of world-class exotic, luxury, and performance vehicles in Dubai. Discrete delivery across Downtown, Palm Jumeirah, and DIFC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased scroll-smooth" data-type="service" data-site-kind="other">
      <head>
        <meta name="page-type" content="service" />
        <meta name="site-kind" content="other" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@600;700&family=Covered+By+Your+Grace&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Syne:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F0] text-[#0C0D0E]">
        {children}
      </body>
    </html>
  );
}
