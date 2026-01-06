
import { Navbar } from "@/components/navbar";
import { AppSidebar } from "@/components/sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Dashboard() {
    const defaultOpen = typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center gap-2 h-16 px-4 bg-white shadow">
          <SidebarTrigger />
          <Navbar/>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
}