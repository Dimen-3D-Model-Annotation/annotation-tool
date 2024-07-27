import { Roboto } from "next/font/google";
import "@styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata = {
  title: "Dimen - Annotation Tool",
  description: "Dimen Annotation Tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          {children}
        </main>
      </body>
      
    </html>
  );
}
