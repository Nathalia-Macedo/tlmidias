import Button from './ui/Button'

export default function MethodSection() {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O método perfeito para o seu delivery bater{' '}
            <span className="text-[#00FFD1]">recorde de vendas</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-base md:text-lg">
            <p>
              Você está cansado de depender dos grandes marketplaces como ifood que te cobram altas,
              ou de ficar preso no seu faturamento atual sabendo que você pode vender muito mais?
            </p>
            
            <p>
              O método Escala Delivery é perfeito para você que deseja bater recorde de vendas e crescer
              o seu faturamento dentro do seu canal próprio de vendas, utilizando de estratégias validadas
              no marketing digital por diversos outros deliveries ao redor do Brasil.
            </p>
          </div>

          <Button className="mt-8 w-full md:w-auto">
            QUERO AUMENTAR MINHAS VENDAS
          </Button>
        </div>
      </div>
    </div>
  )
}

