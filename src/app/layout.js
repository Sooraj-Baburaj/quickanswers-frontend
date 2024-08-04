import { Lato, Roboto } from "next/font/google";
import "./globals.scss";
import Header from "@/src/components/Header";
import { Toaster } from "sonner";

const robotoFont = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const latoFont = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Quick Answers",
  description: "Generate answers on demand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={robotoFont.className}
        style={{
          "--primary-font": robotoFont.style.fontFamily,
          "--secondary-font": latoFont.style.fontFamily,
        }}
      >
        <Toaster position="top-right" />
        <Header />
        {children}
        <div id="portal"></div>
      </body>
    </html>
  );
}
