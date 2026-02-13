import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

<Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Afzal Khan",
      url: "https://afzalkhan.online",
      jobTitle: "AI Engineer",
      sameAs: [
        "https://github.com/codeXafzal",
        "https://linkedin.com/in/afzal-khan1215",
      ]
    }),
  }}
/>
export const metadata = {
  title: "Afzal Khan – AI Engineer | Machine Learning & Web3 Developer",
  description:
    "Afzal Khan is an AI Engineer specializing in Machine Learning, Web3, and Software Development. Building intelligent and scalable solutions.",
  keywords: [
    "Afzal Khan",
    "AI Engineer",
    "Machine Learning Developer",
    "Web3 Developer",
    "Software Developer Portfolio",
  ],
  authors: [{ name: "Afzal Khan" }],
  creator: "Afzal Khan",
  metadataBase: new URL("https://afzalkhan.online"),
  openGraph: {
    title: "Afzal Khan | AI Engineer",
    description:
      "AI Engineer specializing in Machine Learning, Web3, and scalable software systems.",
    url: "https://afzalkhan.online",
    siteName: "Afzal Khan Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
