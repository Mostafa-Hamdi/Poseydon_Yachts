import { Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "PoseydonYachts",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
        <div className="form-footer-container"></div>
      </body>
    </html>
  );
}
