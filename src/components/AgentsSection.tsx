import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { sampleAgents } from '@/data/sampleProperties';
import { Phone, Mail } from 'lucide-react';

export default function AgentsSection() {
  return (
    <section className="mb-12">
     
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Melhores Agentes Imobiliários</h2>
          <p className="text-muted-foreground">Agentes profissionais para ajudar você a encontrar o imóvel perfeito</p>
        </div>
        <Button variant="outline">Ver Todos os Agentes</Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleAgents.map((agent) => (
          <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square overflow-hidden">
              <img 
                src={agent.image} 
                alt={agent.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <CardContent className="p-5">
              <h3 className="font-bold text-lg mb-1">{agent.name}</h3>
              <p className="text-muted-foreground text-sm mb-2">{agent.area}</p>
              <p className="text-sm mb-4">{agent.properties} active listings</p>
              
              <div className="space-y-2">
                <a 
                  href={`tel:${agent.phone}`} 
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {agent.phone}
                </a>
                
                <a 
                  href={`mailto:${agent.email}`} 
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {agent.email}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}