import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { Property } from '@/data/sampleProperties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    if (property.forRent) {
      return `${price.toLocaleString()} MT / mês`;
    } else {
      return `${price.toLocaleString()} MT`;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          className={`absolute top-2 right-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white ${isFavorite ? 'text-red-500' : 'text-gray-600'}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
        
        <div className="absolute bottom-0 left-0 p-2">
          {property.forSale && <Badge className="bg-primary text-white mr-2">À Venda</Badge>}
          {property.forRent && <Badge className="bg-indigo-600 text-white">Para Alugar</Badge>}
          {property.featured && <Badge className="bg-amber-500 text-white ml-2">Destaque</Badge>}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
          <p className="text-muted-foreground text-sm">{property.location}</p>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-bold text-primary">{formatPrice(property.price)}</span>
          <span className="text-sm text-muted-foreground">{property.type}</span>
        </div>
        
        <div className="flex justify-between text-sm border-t border-gray-100 pt-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{property.bedrooms} quartos</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{property.bathrooms} banheiros</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span>{property.area}m²</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={property.agent.image}
            alt={property.agent.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-xs text-muted-foreground">{property.agent.name}</span>
        </div>
        <Button variant="outline" size="sm">Ver</Button>
      </CardFooter>
    </Card>
  );
}