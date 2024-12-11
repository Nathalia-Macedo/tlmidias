// import React from 'react';
// import logo from '../Assets/logo.jpg'
// import Button from './ui/Button';
// import TLMidiasLogo from '../Assets/Vector.png'
// import HeroBackground from '../Assets/Hero.png';
// import BannerBackground from '../Assets/banner.jpg';

// export default function HeroSection() {
//   return (
//     <div 
//       className="min-h-screen bg-[#001a1a] relative"
//       style={{
//         backgroundImage: `url(${HeroBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Notification Banner */}
//       <div 
//         className="p-4 text-white"
//         style={{
//           backgroundImage: `url(${BannerBackground})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="container mx-auto flex flex-row flex-wrap items-center justify-around gap-1 px-2 text-left md:flex-nowrap md:justify-center">
//           <span className="font-bold">ATENÇÃO</span>
//           <span>· Exclusivo para</span>
//           <span className="font-medium">deliveries</span>
//           <span>que faturam mais de</span>
//           <span className="font-medium">R$ 40.000</span>
//           <span>mensais.</span>
//           <a href="#" className="mt-2 w-full rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-4 py-1 text-center text-black transition-opacity hover:opacity-90 md:mt-0 md:ml-2 md:w-auto">
//             Fale conosco →
//           </a>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8 md:py-16">
//         <div className="grid gap-8 md:grid-cols-2 md:gap-16">
//           {/* Left Column */}
//           <div className="flex flex-col items-start justify-center space-y-4 text-left">
//             <img 
//               src={TLMidiasLogo} 
//               alt="TL mídias"
//               className="w-32 h-auto mb-4"
//             />
//             <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
//               Faça seu delivery bater recorde de vendas com o método{' '}
//               <span className="inline-block bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] bg-clip-text text-transparent">MED.</span>
//             </h1>
//             <p className="text-base text-gray-300 md:text-lg">
//               Transforme seu delivery em uma máquina de vendas com um método único e validado por vários deliveries ao redor do Brasil.
//             </p>
//             <Button className="w-full md:w-auto rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-6 py-3 font-semibold text-black transition-all hover:opacity-90">
//               QUERO AUMENTAR MINHAS VENDAS
//             </Button>
//           </div>

//           {/* Right Column - Hidden on Mobile */}
//           <div className="relative hidden md:flex md:items-end md:justify-end md:h-full">
//             <div className="absolute inset-0 -m-8 bg-gradient-radial from-transparent via-[rgba(0,26,26,0.5)] to-[#001a1a] z-10"></div>
//             <img
//               src={logo}
//               alt="Mobile app demonstration"
//               className="relative z-0 w-full max-w-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import logo from '../Assets/logo.jpg'
import Button from './ui/Button';
import TLMidiasLogo from '../Assets/Vector.png'
import HeroBackground from '../Assets/Hero.png';
import BannerBackground from '../Assets/banner.jpg';

export default function HeroSection() {
  return (
    <div 
      className="min-h-screen bg-[#001a1a] relative"
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Notification Banner */}
      <div 
        className="p-4 text-white"
        style={{
          backgroundImage: `url(${BannerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto flex flex-col items-start justify-start px-2 text-left md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-1">
          <div className="flex flex-wrap items-center gap-1">
            <span className="font-bold">ATENÇÃO</span>
            <span>· Exclusivo para</span>
            <span className="font-medium">deliveries</span>
            <span>que faturam mais de</span>
            <span className="font-medium">R$ 40.000</span>
            <span>mensais.</span>
          </div>
          <a href="#" className="mt-2 w-auto rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-4 py-1 text-center text-black transition-opacity hover:opacity-90 md:mt-0 md:ml-2">
            Fale conosco →
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start justify-center space-y-4 text-left">
            <img 
              src={TLMidiasLogo} 
              alt="TL mídias"
              className="w-32 h-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
              Faça seu delivery bater recorde de vendas com o método{' '}
              <span className="inline-block bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] bg-clip-text text-transparent">MED.</span>
            </h1>
            <p className="text-base text-gray-300 md:text-lg">
              Transforme seu delivery em uma máquina de vendas com um método único e validado por vários deliveries ao redor do Brasil.
            </p>
            <Button className="w-full md:w-auto rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-6 py-3 font-semibold text-black transition-all hover:opacity-90">
              QUERO AUMENTAR MINHAS VENDAS
            </Button>
          </div>

          {/* Right Column - Hidden on Mobile */}
          <div className="relative hidden md:flex md:items-end md:justify-end md:h-full">
            <div className="absolute inset-0 -m-8 bg-gradient-radial from-transparent via-[rgba(0,26,26,0.5)] to-[#001a1a] z-10"></div>
            <img
              src={logo}
              alt="Mobile app demonstration"
              className="relative z-0 w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

