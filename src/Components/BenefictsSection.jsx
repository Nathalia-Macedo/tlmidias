// import { Users, TrendingUp, BarChart3 } from 'lucide-react'

// export default function BenefitsSection() {
//   return (
//     <div className="bg-[#001a1a] py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid gap-8 md:grid-cols-3">
//           {/* Clientes Card */}
//           <div className="relative h-[374px] w-[300px] rounded-[4px] border border-white/20 bg-black p-8 text-center shadow-[0_0_50px_0_rgba(0,255,209,0.1)] mx-auto">
//             <div className="mb-4 flex justify-center">
//               <Users className="h-12 w-12 text-[#00FFD1]" />
//             </div>
//             <h3 className="mb-4 text-2xl font-bold text-white">+ Clientes</h3>
//             <p className="text-gray-300">
//               Conquiste novos clientes todos os dias para seu delivery, e expanda sua base de clientes!
//             </p>
//           </div>

//           {/* Vendas Card */}
//           <div className="relative h-[374px] w-[300px] rounded-[4px] border border-white/20 bg-black p-8 text-center shadow-[0_0_50px_0_rgba(0,255,209,0.1)] mx-auto">
//             <div className="mb-4 flex justify-center">
//               <TrendingUp className="h-12 w-12 text-[#00FFD1]" />
//             </div>
//             <h3 className="mb-4 text-2xl font-bold text-white">+ Vendas</h3>
//             <p className="text-gray-300">
//               Aumente os seus pedidos no seu canal próprio de vendas, captando mais clientes e aumentando a recorrência deles no seu Delivery.
//             </p>
//           </div>

//           {/* Prosperidade Card */}
//           <div className="relative h-[374px] w-[300px] rounded-[4px] border border-white/20 bg-black p-8 text-center shadow-[0_0_50px_0_rgba(0,255,209,0.1)] mx-auto">
//             <div className="mb-4 flex justify-center">
//               <BarChart3 className="h-12 w-12 text-[#00FFD1]" />
//             </div>
//             <h3 className="mb-4 text-2xl font-bold text-white">+ Prosperidade</h3>
//             <p className="text-gray-300">
//               Seja mais reconhecido dentro da sua região e cresça cada vez mais o seu negócio de forma sustentável e próspera!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { Users, TrendingUp, BarChart3 } from 'lucide-react'

export default function BenefitsSection() {
  return (
    <div className="bg-[#001a1a] py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-8 md:px-8">
          {/* Clientes Card */}
          <div className="relative w-full aspect-square rounded-[4px] border border-white/20 bg-black p-6 md:p-8 text-center shadow-[0_0_50px_0_rgba(0,255,209,0.3)]">
            <div className="mb-4 flex justify-center">
              <Users className="h-12 w-12 text-[#00FFD1]" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">+ Clientes</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Conquiste novos clientes todos os dias para seu delivery, e expanda sua base de clientes!
            </p>
          </div>

          {/* Vendas Card */}
          <div className="relative w-full aspect-square rounded-[4px] border border-white/20 bg-black p-6 md:p-8 text-center shadow-[0_0_50px_0_rgba(0,255,209,0.3)]">
            <div className="mb-4 flex justify-center">
              <TrendingUp className="h-12 w-12 text-[#00FFD1]" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">+ Vendas</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Aumente os seus pedidos no seu canal próprio de vendas, captando mais clientes e aumentando a recorrência deles no seu Delivery.
            </p>
          </div>

          {/* Prosperidade Card */}
          <div className="relative w-full aspect-square rounded-[4px] border border-white/20 bg-black p-6 md:p-8 text-center shadow-[0_0_50px_0_rgba(0,255,209,0.3)]">
            <div className="mb-4 flex justify-center">
              <BarChart3 className="h-12 w-12 text-[#00FFD1]" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">+ Prosperidade</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Seja mais reconhecido dentro da sua região e cresça cada vez mais o seu negócio de forma sustentável e próspera!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

