import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Dashboard",
  description: "Manage school activities easily",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex justify-between">
      <SideBar />
      {children}
    </div>
  );
}
