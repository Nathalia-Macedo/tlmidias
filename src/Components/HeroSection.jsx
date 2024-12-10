import logo from '../Assets/logo.png'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#001a1a] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgNjBIMFYwaDYwdjYwem0tMi0yVjJIMnY1Nmg1NnoiIGZpbGw9IiMxYTFhMWEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>

      {/* Notification Banner */}
      <div className="bg-gradient-to-r from-[#003333] to-[#006666] p-4 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center gap-1 text-center md:flex-row md:gap-2 md:text-left">
          <span className="font-bold">ATENÇÃO</span>
          <div className="flex flex-wrap justify-center gap-1 md:flex-nowrap">
            <span>· Exclusivo para</span>
            <span className="font-medium">deliveries</span>
            <span>que faturam mais de</span>
            <span className="font-medium">R$ 40.000</span>
            <span className="hidden md:inline">mensais.</span>
          </div>
          <a href="#" className="mt-2 w-full rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-4 py-1 text-center text-black transition-opacity hover:opacity-90 md:mt-0 md:ml-2 md:w-auto">
            Fale conosco →
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-4 text-center md:space-y-6 md:text-left">
            <div className="inline-block bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] bg-clip-text text-transparent">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text x="0" y="30" className="text-2xl font-bold fill-current">TL mídias</text>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
              Faça seu delivery bater recorde de vendas com o método{' '}
              <span className="inline-block bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] bg-clip-text text-transparent">
                MED.
              </span>
            </h1>
            <p className="text-base text-gray-300 md:text-lg">
              Transforme seu delivery em uma máquina de vendas com um método único e validado por vários deliveries ao redor do Brasil.
            </p>
            <button className="mx-auto w-full rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-6 py-3 font-semibold text-black transition-all hover:opacity-90 md:mx-0 md:w-fit">
              QUERO AUMENTAR MINHAS VENDAS
            </button>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={logo}
              alt="Mobile app demonstration"
              className="w-full max-w-sm md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

