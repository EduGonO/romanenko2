"use client";

import { usePathname } from "next/navigation";
import { Sidebar, MobileSidebar } from "./sidebar";
import { useEffect, useState } from "react";

export function ClientSidebar() {
  const pathname = usePathname() || "/";
  const [mounted, setMounted] = useState(false);

  // This prevents hydration errors by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Sidebar pathname={pathname} />
      <MobileSidebar pathname={pathname} />
    </>
  );
}
