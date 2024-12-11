import React from 'react';
import HeroSection from '../Components/HeroSection';
import BenefitsSection from '../Components/BenefictsSection';
import MethodSection from '../Components/MethodSection';
import TestimonialsSection from '../Components/Testemunhas';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <MethodSection />
      <TestimonialsSection/>
    </main>
  );
}

