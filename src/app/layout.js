import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "School App",
  description: "Manage school activities easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex item-center justify-between">
          <SideBar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
