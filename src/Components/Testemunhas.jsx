// const testimonials = [
//     {
//       text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
//       author: "Courtney Henry",
//       handle: "@courtneyhenry"
//     },
//     {
//       text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
//       author: "Courtney Henry",
//       handle: "@courtneyhenry"
//     },
//     {
//       text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
//       author: "Courtney Henry",
//       handle: "@courtneyhenry"
//     },
//     {
//       text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
//       author: "Courtney Henry",
//       handle: "@courtneyhenry"
//     },
//     {
//       text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
//       author: "Courtney Henry",
//       handle: "@courtneyhenry"
//     }
//   ]
  
//   function TestimonialCard({ text, author, handle }) {
//     return (
//       <div className="relative rounded-lg border border-white/20 bg-black p-6 shadow-[0_0_50px_0_rgba(0,255,209,0.3)]">
//         <p className="mb-4 text-gray-300">{text}</p>
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
//           <div>
//             <div className="font-medium text-white">{author}</div>
//             <div className="text-sm text-gray-400">{handle}</div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  
//   export default function TestimonialsSection() {
//     return (
//       <div className="bg-black py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
//             Veja o que{' '}
//             <span className="text-[#00FFD1]">nossos clientes dizem</span>
//           </h2>
          
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className={index === 3 || index === 4 ? "md:col-span-1" : ""}>
//                 <TestimonialCard {...testimonial} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
  
const testimonials = [
    {
      text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
      author: "Courtney Henry",
      handle: "@courtneyhenry"
    },
    {
      text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
      author: "Courtney Henry",
      handle: "@courtneyhenry"
    },
    {
      text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
      author: "Courtney Henry",
      handle: "@courtneyhenry"
    },
    {
      text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
      author: "Courtney Henry",
      handle: "@courtneyhenry"
    },
    {
      text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
      author: "Courtney Henry",
      handle: "@courtneyhenry"
    },{
        text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsum.",
        author: "Courtney Henry",
        handle: "@courtneyhenry"
      }
  ]
  
  function TestimonialCard({ text, author, handle }) {
    return (
      <div className="relative rounded-lg border border-white/20 bg-black p-6 shadow-[0_0_50px_0_rgba(0,255,209,0.3)]">
        <p className="mb-4 text-gray-300">{text}</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div>
            <div className="font-medium text-white">{author}</div>
            <div className="text-sm text-gray-400">{handle}</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default function TestimonialsSection() {
    return (
      <div className="bg-black py-16">
        <div className="container mx-auto px-4 md:flex md:flex-col md:items-center">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Veja o que{' '}
            <span className="text-[#00FFD1]">nossos clientes dizem</span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:max-w-5xl w-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={index === 3 || index === 4 ? "md:col-span-1" : ""}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  