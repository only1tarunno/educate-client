import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const epilogue = Epilogue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Educate",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
