import type { Metadata } from "next";
import "./globals.css";
import initializeDb from "../database/initializeDb";

export const metadata: Metadata = {
  title: "Go Out",
  description: "Find your next reason to go out",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    await initializeDb(); // Connect to the database

    return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}