
import logo from '../Assets/logo.png'
import Button from './ui/Button'



export default function HeroSection() {
  return (
    <div className="min-h-screen !bg-[#001a1a] relative" style={{ backgroundColor: '#001a1a' }}>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgNjBIMFYwaDYwdjYwem0tMi0yVjJIMnY1Nmg1NnoiIGZpbGw9IiMxYTFhMWEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>

      {/* Notification Banner */}
      <div className="bg-gradient-to-r from-[#003333] to-[#006666] p-4 text-white">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
          <span className="font-bold">ATENÇÃO</span>
          <span>· Exclusivo para</span>
          <span className="font-medium">deliveries</span>
          <span>que faturam mais de</span>
          <span className="font-medium">R$ 40.000,00.</span>
          <a href="#" className="ml-2 rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-4 py-1 text-black hover:opacity-90 transition-opacity">
            Fale conosco →
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-block bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] bg-clip-text text-transparent">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="0" y="30" className="text-2xl font-bold fill-current">TL mídias</text>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Faça seu delivery bater recorde de vendas com o método{' '}
              <span className="inline-block bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] bg-clip-text text-transparent">MED.</span>
            </h1>
            <p className="text-lg text-gray-300">
              Transforme seu delivery em uma máquina de vendas com um método único e validado por vários deliveries ao redor do Brasil.
            </p>
            <Button className="w-fit rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-6 py-3 font-semibold text-black transition-all hover:opacity-90">
              QUERO AUMENTAR MINHAS VENDAS
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <img
              src={logo}
              alt="Mobile app demonstration"
              className="relative z-10 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

