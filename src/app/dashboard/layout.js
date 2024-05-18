import SideBar from "@/components/SideBar";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title: "Academic Hub | Dashboard",
  description: "Manage school activities easily",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex justify-between">
      <MobileNav />
      <SideBar />
      {children}
    </div>
  );
}
