import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Shubham Sharma ✌️",
  description: "Software Engineer | Mobile & Backend Developer",
  keywords: "Shubham Sharma, Software Engineer, Flutter Developer, Mobile Developer, Backend Developer, C++, Python, Java, Dart, Portfolio",
  authors: [{ name: "Shubham Sharma" }],
  creator: "Shubham Sharma",
  publisher: "Shubham Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Shubham Sharma - Software Engineer",
    description: "Software engineer specialising in mobile app development, systems programming, and backend engineering.",
    url: "https://shubh152205.github.io",
    siteName: "Shubham Sharma's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Sharma - Software Engineer",
    description: "Software engineer specialising in mobile app development, systems programming, and backend engineering.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
