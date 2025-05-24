import { ClientSidebar } from "./client-sidebar";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <ClientSidebar />
      <main className="p-4 lg:ml-[350px] lg:p-6 flex flex-col min-h-screen">
        <div className="flex-1 pt-16 lg:pt-0">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
