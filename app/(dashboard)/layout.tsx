import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/theme";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="p-10 text-4xl font-bold">
          {children} <ModeToggle />
        </div>
      </main>
    </SidebarProvider>
  );
}
