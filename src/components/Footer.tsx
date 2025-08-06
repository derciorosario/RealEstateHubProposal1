import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="py-8 border-b border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-2">Inscreva-se em Nossa Newsletter</h3>
              <p className="text-gray-400">Mantenha-se atualizado com os últimos anúncios imobiliários e tendências do mercado</p>
            </div>
            <div className="md:w-1/2 flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Seu endereço de email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-primary hover:bg-primary/90">Inscrever-se</Button>
            </div>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="text-xl font-bold">RealEstate Hub</span>
            </div>
            <p className="text-gray-400 mb-4">
              O principal site imobiliário de Moçambique para compra, venda e aluguel de imóveis residenciais e comerciais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Encontrar Imóvel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Anunciar Seu Imóvel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Notícias Imobiliárias</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Avaliação de Imóveis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Encontrar um Agente</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Calculadora de Hipotecas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Localizações</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maputo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Matola</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beira</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nampula</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pemba</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tete</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contate-nos</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <span>info@privateproperty.co.mz</span>
              </li>
              <li>
                <p>RealEstate Hub Moçambique Lda.</p>
                <p className="text-gray-400">Registro: 2015/003396/08</p>
              </li>
              <li>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Contatar Suporte
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              © {new Date().getFullYear()} RealEstate Hub. Todos os Direitos Reservados.
            </div>
            <div className="flex gap-6 flex-wrap">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
              <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Manual PAIA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}