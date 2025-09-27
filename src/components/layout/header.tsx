'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Sprout } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Receitas' },
  { href: '/favoritos', label: 'Favoritos' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Don't render header on the login page
  if (pathname === '/login') {
    return null;
  }

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    navLinks.map(link => (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => isMobile && setIsSheetOpen(false)}
        className={cn(
          "transition-colors hover:text-primary",
          pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground",
          isMobile && "text-lg py-2"
        )}
      >
        {link.label}
      </Link>
    ))
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 no-print">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Delícias Natalinas</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLinks isMobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
