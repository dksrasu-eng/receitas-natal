'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = useDebouncedCallback((term: string) => {
    handleFilterChange('q', term);
  }, 300);

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="relative col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por título ou ingrediente..."
            className="pl-10"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('q')?.toString()}
          />
        </div>
        <Select onValueChange={(value) => handleFilterChange('categoria', value)} defaultValue={searchParams.get('categoria') || 'all'}>
          <SelectTrigger>
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Categorias</SelectItem>
            <SelectItem value="salgada">Salgadas</SelectItem>
            <SelectItem value="doce">Doces</SelectItem>
            <SelectItem value="bebida">Bebidas</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilterChange('dificuldade', value)} defaultValue={searchParams.get('dificuldade') || 'all'}>
          <SelectTrigger>
            <SelectValue placeholder="Dificuldade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Dificuldades</SelectItem>
            <SelectItem value="fácil">Fácil</SelectItem>
            <SelectItem value="médio">Médio</SelectItem>
            <SelectItem value="difícil">Difícil</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilterChange('alcool', value)} defaultValue={searchParams.get('alcool') || 'all'}>
          <SelectTrigger>
            <SelectValue placeholder="Álcool" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Com/Sem Álcool</SelectItem>
            <SelectItem value="com">Com Álcool</SelectItem>
            <SelectItem value="sem">Sem Álcool</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
