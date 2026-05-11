import React from 'react';

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#BFA56A] selection:text-black overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
      `}} />

      {/* NAV */}
      <nav className="absolute top-0 w-full z-50 py-10 px-6 md:px-16 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-[0.1em] text-[#BFA56A]">RES</span>
            <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">BROTHERS</span>
          </div>
        </div>
        <ul className="hidden lg:flex gap-10 font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-300">
          <li className="text-[#BFA56A] border-b border-[#BFA56A] pb-1 cursor-pointer">Inicio</li>
          <li className="hover:text-white transition-colors cursor-pointer">La Carta</li>
          <li className="hover:text-white transition-colors cursor-pointer">Nuestra Carne</li>
          <li className="hover:text-white transition-colors cursor-pointer">Contacto</li>
        </ul>
        <button className="border border-[#BFA56A]/50 hover:bg-[#BFA56A] hover:text-black transition-all px-6 py-3 font-sans text-[9px] tracking-[0.2em] uppercase font-bold text-[#BFA56A]">
          Reservar
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[0.2] brightness-[0.35]" alt="Steak" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-3xl mt-20">
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-[#BFA56A]"></div>
             <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-[#BFA56A]">The Art of Fire & Meat</span>
          </div>
          <h1 className="font-serif text-6xl md:text-[5.5rem] leading-[1] uppercase mb-8 tracking-tight">
            Donde el fuego <br /> 
            <span className="text-gray-200 italic font-light">se convierte en</span> <br />
            experiencia
          </h1>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-[#BFA56A] hover:bg-white text-black font-bold py-5 px-10 transition-all tracking-[0.2em] uppercase text-[10px]">Reservar Mesa</button>
            <button className="border border-white/20 hover:border-white text-white font-bold py-5 px-10 transition-all tracking-[0.2em] uppercase text-[10px]">Ver Carta</button>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: LA BURGER DE CHULETA (EL ICONO) */}
      <section className="bg-[#0D0D0D] py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Imagen Impactante */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#BFA56A]/20 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop" 
              alt="Hamburguesa de Chuleta Madurada" 
              className="relative z-10 w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 hidden md:block z-20">
              <div className="bg-[#BFA56A] p-8 text-black text-center">
                <span className="block font-serif text-4xl font-bold italic">60</span>
                <span className="block font-sans text-[10px] font-bold tracking-[0.2em] uppercase">Días Maduración</span>
              </div>
            </div>
          </div>

          {/* Texto Descriptivo */}
          <div className="relative z-10">
            <h3 className="font-serif text-[#BFA56A] italic text-2xl mb-2">La Leyenda de Viapol</h3>
            <h2 className="font-serif text-5xl md:text-6xl uppercase mb-8 leading-none">Burger de <br/><span className="text-[#BFA56A]">Chuleta</span></h2>
            
            <p className="font-sans text-gray-400 font-light leading-relaxed mb-8 text-lg border-l-2 border-[#BFA56A]/50 pl-6">
              Nuestra pieza maestra. 200g de chuleta de vaca vieja madurada, picada a cuchillo, servida en pan brioche artesano y fundida con queso premium. El sabor de un chuletón en cada bocado.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="text-[#BFA56A] font-bold text-xs tracking-widest block mb-1 uppercase">Punto de Carne</span>
                <p className="text-gray-500 text-xs uppercase tracking-tighter">Perfecto al carbón</p>
              </div>
              <div>
                <span className="text-[#BFA56A] font-bold text-xs tracking-widest block mb-1 uppercase">Edición Limitada</span>
                <p className="text-gray-500 text-xs uppercase tracking-tighter">Servicio diario</p>
              </div>
            </div>

            {/* Testimonio Real */}
            <div className="bg-white/5 p-6 border-l-4 border-[#BFA56A] italic font-serif text-gray-300 text-sm">
              "He probado muchas en Sevilla, pero la burger de chuleta de Res Brothers juega en otra liga. El sabor a brasa es espectacular."
              <span className="block mt-2 font-sans text-[9px] not-italic font-bold tracking-widest text-[#BFA56A] uppercase">— Cliente Real (Google Reviews)</span>
            </div>
          </div>
        </div>
      </section>
{/* SECCIÓN: GALERÍA GOURMET CUADRADA */}
      <section className="bg-[#0A0A0A] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="font-sans text-[10px] tracking-[0.4em] text-[#BFA56A] uppercase mb-4">El Ritual</h4>
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter text-white">
              La Experiencia <span className="italic text-gray-400">Visual</span>
            </h2>
          </div>

          {/* GRID DE IMÁGENES CUADRADAS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Foto 1: El Producto Estrella */}
            <div className="aspect-square overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1000&auto=format&fit=crop" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Chuletón" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Foto 2: El Fuego */}
            <div className="aspect-square overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1000&auto=format&fit=crop" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Brasas" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Foto 3: La Burger de Chuleta (Detalle) */}
            <div className="aspect-square overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Burger" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Foto 4: Ambiente Viapol */}
            <div className="aspect-square overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1550966842-284d66331273?q=80&w=1000&auto=format&fit=crop" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Interior" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Foto 5: El Corte */}
            <div className="aspect-square overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1000&auto=format&fit=crop" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Corte Carne" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Foto 6: Bodega / Vino */}
            <div className="aspect-square overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Vino" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

          </div>
        </div>
      </section>
      {/* FOOTER BARRA DIRECCIÓN */}
      <section className="bg-black py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] text-gray-500 uppercase">
          <p>AV. DE DIEGO MARTÍNEZ BARRIO, 10B · SEVILLA</p>
          <p className="mt-4 md:mt-0">© 2026 RES BROTHERS STEAKHOUSE</p>
        </div>
      </section>

    </main>
  );
}