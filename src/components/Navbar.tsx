import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, User, Search, X } from 'lucide-react';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="flex flex-col gap-4 pt-4">
                <a href="/" className="flex items-center text-lg font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  RealEstate Hub
                </a>
                <div className="flex flex-col space-y-3">
                  <a href="#" className="text-muted-foreground hover:text-foreground">Comprar</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Alugar</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Vender</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Notícias Imobiliárias</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Encontrar um Agente</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Empréstimos</a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Logo */}
        <a href="/" className="flex items-center text-lg font-semibold mr-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          RealEstate Hub
        </a>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Comprar</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="flex h-full flex-col justify-between rounded-md bg-muted p-4 text-muted-foreground">
                    <div className="flex flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">Comprando um Imóvel</h4>
                        <p className="text-xs">Encontre a casa dos seus sonhos com nossos anúncios completos de imóveis.</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                        <div className="text-sm font-medium leading-none">Casas</div>
                        <p className="line-clamp-2 text-xs text-muted-foreground">
                          Navegue pelas casas à venda
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                        <div className="text-sm font-medium leading-none">Apartamentos</div>
                        <p className="line-clamp-2 text-xs text-muted-foreground">
                          Encontre apartamentos e flats
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                        <div className="text-sm font-medium leading-none">Novos Empreendimentos</div>
                        <p className="line-clamp-2 text-xs text-muted-foreground">
                          Últimos desenvolvimentos imobiliários
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Alugar</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                  <NavigationMenuLink asChild>
                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                      <div className="text-sm font-medium leading-none">Aluguel de Longo Prazo</div>
                      <p className="line-clamp-2 text-xs text-muted-foreground">
                        Encontre imóveis para aluguel de longo prazo
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                      <div className="text-sm font-medium leading-none">Estadias de Curto Prazo</div>
                      <p className="line-clamp-2 text-xs text-muted-foreground">
                        Aluguel para férias e curto prazo
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                      <div className="text-sm font-medium leading-none">Acomodação Estudantil</div>
                      <p className="line-clamp-2 text-xs text-muted-foreground">
                        Aluguel para estudantes
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                      <div className="text-sm font-medium leading-none">Imóveis Comerciais</div>
                      <p className="line-clamp-2 text-xs text-muted-foreground">
                        Espaços de escritório e lojas
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                Vender
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                Notícias Imobiliárias
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Search Icon - Mobile */}
        <div className="flex-grow flex md:hidden justify-end">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Auth Buttons */}
        <div className="ml-auto flex items-center space-x-2">
          <div className="hidden md:flex">
            <Button variant="ghost" size="sm">Entrar</Button>
            <Button size="sm">Registrar</Button>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Imóveis Salvos</DropdownMenuItem>
              <DropdownMenuItem>Alertas de Imóveis</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="py-3 px-4 border-t md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="search" 
              placeholder="Pesquisar imóveis..." 
              className="w-full border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      )}
    </header>
  );
}