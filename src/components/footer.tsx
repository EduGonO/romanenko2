export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center text-xs text-gray-500">
      © {currentYear} Michael Romanenko
    </footer>
  );
}
