import { Inter } from "next/font/google";
import "./styles.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo app with Next.js from Florian Neiss",
  description: "Simple todo app using Next.js, React, and MongoDB",
};

import { ReactNode } from "react";

/**
 * RootLayout is the main layout component for the application.
 * It wraps all page content with the necessary HTML structure and applies global styles.
 *
 * @param children - The React node(s) to be rendered within the layout.
 * @returns The root HTML structure with the provided children.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
