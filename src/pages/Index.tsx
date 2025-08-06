import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import PropertyCard from '@/components/PropertyCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProperties from '@/components/FeaturedProperties';
import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import AgentsSection from '@/components/AgentsSection';
import { sampleProperties } from '@/data/sampleProperties';

export default function HomePage() {
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <HeroSection />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <section className="mb-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="buy">Comprar</TabsTrigger>
                  <TabsTrigger value="rent">Alugar</TabsTrigger>
                  <TabsTrigger value="sell">Vender</TabsTrigger>
                  <TabsTrigger value="valuations">Avaliações</TabsTrigger>
                </TabsList>
                
                <TabsContent value="buy" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                      <Input 
                        placeholder="Pesquisar por bairro, cidade ou código postal" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Tipo de Imóvel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">Casa</SelectItem>
                          <SelectItem value="apartment">Apartamento</SelectItem>
                          <SelectItem value="townhouse">Condomínio</SelectItem>
                          <SelectItem value="land">Terreno</SelectItem>
                          <SelectItem value="commercial">Comercial</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Quartos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1+ Quarto</SelectItem>
                          <SelectItem value="2">2+ Quartos</SelectItem>
                          <SelectItem value="3">3+ Quartos</SelectItem>
                          <SelectItem value="4">4+ Quartos</SelectItem>
                          <SelectItem value="5">5+ Quartos</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Banheiros" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1+ Banheiro</SelectItem>
                          <SelectItem value="2">2+ Banheiros</SelectItem>
                          <SelectItem value="3">3+ Banheiros</SelectItem>
                          <SelectItem value="4">4+ Banheiros</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button className="bg-primary hover:bg-primary/90">Pesquisar</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Faixa de Preço: {priceRange[0].toLocaleString()} MT - {priceRange[1].toLocaleString()} MT</span>
                      <Button variant="link" className="p-0 h-auto text-xs">Resetar</Button>
                    </div>
                    <Slider
                      defaultValue={[0, 5000000]}
                      max={10000000}
                      step={50000}
                      onValueChange={(value) => setPriceRange(value)}
                      className="py-4"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Piscina</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Jardim</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Garagem</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Segurança</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Aceita Animais</Badge>
                  </div>
                </TabsContent>
                
                <TabsContent value="rent" className="space-y-4">
                  {/* Similar structure as buy tab with rental-specific options */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow">
                      <Input placeholder="Pesquisar por bairro, cidade ou código postal" className="w-full" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Tipo de Imóvel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">Casa</SelectItem>
                          <SelectItem value="apartment">Apartamento</SelectItem>
                          <SelectItem value="townhouse">Condomínio</SelectItem>
                          <SelectItem value="room">Quarto</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Quartos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1+ Quarto</SelectItem>
                          <SelectItem value="2">2+ Quartos</SelectItem>
                          <SelectItem value="3">3+ Quartos</SelectItem>
                          <SelectItem value="4">4+ Quartos</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Preço/mês" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5000">Até 5.000 MT</SelectItem>
                          <SelectItem value="10000">Até 10.000 MT</SelectItem>
                          <SelectItem value="15000">Até 15.000 MT</SelectItem>
                          <SelectItem value="20000">Até 20.000 MT</SelectItem>
                          <SelectItem value="30000">Até 30.000 MT</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button className="bg-primary hover:bg-primary/90">Pesquisar</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="sell">
                  <div className="space-y-4 py-4">
                    <h3 className="text-lg font-medium">Obtenha uma avaliação para seu imóvel</h3>
                    <p className="text-muted-foreground">Insira seus dados e nossos especialistas entrarão em contato com uma avaliação gratuita do imóvel.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Nome Completo" />
                      <Input placeholder="Endereço de Email" />
                      <Input placeholder="Número de Telefone" />
                      <Input placeholder="Endereço do Imóvel" />
                    </div>
                    
                    <Button className="w-full md:w-auto">Solicitar Avaliação</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="valuations">
                  <div className="space-y-4 py-4">
                    <h3 className="text-lg font-medium">Ferramentas de Avaliação de Imóveis</h3>
                    <p className="text-muted-foreground">Obtenha informações sobre valores de imóveis na sua área ou verifique quanto vale seu imóvel.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <h4 className="font-medium">Relatórios de Valor por Área</h4>
                        <p className="text-sm text-muted-foreground">Dados completos sobre o valor dos imóveis em qualquer área</p>
                      </Card>
                      
                      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <h4 className="font-medium">Relatório de Imóvel</h4>
                        <p className="text-sm text-muted-foreground">Avaliação detalhada de um imóvel específico</p>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
        
        {/* Featured Properties */}
        <FeaturedProperties properties={sampleProperties.slice(0, 6)} />
        
        {/* Property Listings */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Imóveis Recentes</h2>
            <div className="flex items-center gap-2">
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mais Recentes</SelectItem>
                  <SelectItem value="price_low">Preço (Menor para Maior)</SelectItem>
                  <SelectItem value="price_high">Preço (Maior para Menor)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mr-2">Anterior</Button>
            <Button variant="outline">Próximo</Button>
          </div>
        </section>
        
        {/* News & Articles */}
        <NewsSection />
        
        {/* Top Agents */}
        <AgentsSection />
      </main>
      
      <Footer />
    </div>
  );
}