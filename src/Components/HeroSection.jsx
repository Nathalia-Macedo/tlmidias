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
            <img 
              src={TLMidiasLogo} 
              alt="TL mídias"
              className="w-32 h-auto mb-4"
            />
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
          <div className="relative flex items-end justify-end h-full">
            <img
              src={logo}
              alt="Mobile app demonstration"
              className="relative z-10 w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

