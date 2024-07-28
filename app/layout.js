import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weights: ["400", "600", "700"], 
});

export const metadata = {
  title: "Dimen - Annotation Tool",
  description: "Dimen Annotation Tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}