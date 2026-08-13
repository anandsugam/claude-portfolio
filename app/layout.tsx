import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sugam Anand · Design Leader",
  description:
    "Senior Director of Product Design at Smallcase & Tickertape. A full-stack design leader with 10+ years building products at scale.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap"
          rel="stylesheet"
        />
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
        <script dangerouslySetInnerHTML={{__html:`if(location.hash.indexOf('figmacapture')!==-1){var s=document.createElement('style');s.textContent='*{opacity:1!important;transform:none!important;transition:none!important;animation:none!important}';document.documentElement.appendChild(s)}`}} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}
