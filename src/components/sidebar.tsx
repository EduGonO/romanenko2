// Use Link component for internal links
import Link from "next/link";

const navItems = [
  { name: "Bio", path: "/" },
  { name: "Œuvres", path: "/oeuvres" },
  { name: "Presse", path: "/presse" },
  { name: "Contact", path: "/contact" },
];

interface SidebarProps {
  pathname: string;
}

export function Sidebar({ pathname }: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 w-[350px] h-screen flex flex-col p-6 border-r border-gray-200 bg-white hidden lg:flex">
      <header>
        <Link href="/" className="block">
          <h1 className="text-[50px] font-bold leading-[0.8em] tracking-[-2px] text-[#111]">
            michael<br />romanenko
          </h1>
        </Link>
      </header>

      {/* This spacer pushes the navigation to the bottom */}
      <div className="flex-grow"></div>

      <nav className="flex flex-col space-y-3 mb-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`text-base ${
                isActive
                  ? "font-bold text-[#404040]"
                  : "font-medium text-[#666666]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function MobileSidebar({ pathname }: SidebarProps) {
  return (
    <div className="lg:hidden w-full bg-white border-b border-gray-200 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex flex-col">
        <header className="mb-4">
          <Link href="/" className="block">
            <h1 className="text-2xl font-bold tracking-tighter text-[#111]">
              michael romanenko
            </h1>
          </Link>
        </header>

        <nav className="flex space-x-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm ${
                  isActive
                    ? "font-bold text-[#404040]"
                    : "font-medium text-[#666666]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
