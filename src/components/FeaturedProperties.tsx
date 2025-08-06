import { Button } from '@/components/ui/button';
import PropertyCard from './PropertyCard';
import { Property } from '@/data/sampleProperties';

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Imóveis em Destaque</h2>
          <p className="text-muted-foreground">Propriedades selecionadas pelos nossos especialistas</p>
        </div>
        <Button variant="outline">Ver Todos em Destaque</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}