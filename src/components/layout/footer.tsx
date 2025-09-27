'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/login') {
    return null;
  }

  return (
    <footer className="py-6 md:px-8 md:py-0 bg-secondary/50 no-print">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Delícias Natalinas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
