'use client';

import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button variant="ghost" size="icon" onClick={handlePrint} className="no-print">
      <Printer className="w-6 h-6 text-muted-foreground" />
      <span className="sr-only">Imprimir receita</span>
    </Button>
  );
}
