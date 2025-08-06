import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { sampleNews } from '@/data/sampleProperties';

export default function NewsSection() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Notícias & Insights Imobiliários</h2>
          <p className="text-muted-foreground">Mantenha-se atualizado com as últimas tendências e notícias do mercado</p>
        </div>
        <Button variant="outline">Todos os Artigos</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleNews.map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <CardContent className="p-5">
              <div className="text-sm text-muted-foreground mb-2">
                {new Date(article.date).toLocaleDateString('en-ZA', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
              
              <Button variant="link" className="p-0 h-auto mt-2">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}