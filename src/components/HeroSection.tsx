import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] max-h-[700px] min-h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/40">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470" 
          alt="Exterior de casa bonita" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Encontre a Casa dos Seus Sonhos em Moçambique</h1>
          <p className="text-xl opacity-90 mb-8">Milhares de propriedades à venda e para alugar dos principais agentes imobiliários e vendedores privados de Moçambique.</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Explorar Imóveis
            </Button>
            <Button size="lg" variant="outline" className="border-white border-0 text-white bg-[#3c36ab] hover:bg-white/80">
              Anunciar Seu Imóvel
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave Overlay */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}