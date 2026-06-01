import React from 'react';

export default function Home() {
  
  // 🛑 INTERRUPTOR DE MANTENIMIENTO:
  // Para ACTIVARLO (ocultar la web), quita las dos barras (//) de la línea de abajo.
  // Para DESACTIVARLO (mostrar la web al cliente), vuelve a poner las dos barras (//) al principio.
  
  return <div className="bg-[#0A0A0A] min-h-screen text-white flex flex-col items-center justify-center gap-4"><span className="font-serif text-4xl text-[#BFA56A] tracking-widest">RES BROTHERS</span><p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gray-500">Sitio temporalmente en mantenimiento</p></div>;

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#BFA56A] selection:text-black overflow-x-hidden scroll-smooth">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); }
      `}} />

      {/* NAV STICKY PREMIUM */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-16 flex justify-between items-center bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-[0.1em] text-[#BFA56A]">RES</span>
            <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">BROTHERS</span>
          </div>
        </div>
        
        <ul className="hidden lg:flex gap-10 font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-300">
          <li className="hover:text-[#BFA56A] transition-colors"><a href="#inicio">Inicio</a></li>
          <li className="hover:text-[#BFA56A] transition-colors"><a href="#carta">La Carta</a></li>
          <li className="hover:text-[#BFA56A] transition-colors"><a href="#galeria">Experiencia</a></li>
          <li className="hover:text-[#BFA56A] transition-colors"><a href="#contacto">Contacto</a></li>
        </ul>

        <a href="#contacto" className="border border-[#BFA56A]/50 text-[#BFA56A] px-6 py-3 font-sans text-[9px] tracking-[0.2em] uppercase font-bold hover:bg-[#BFA56A] hover:text-black transition-all">
          Reservar Mesa
        </a>
      </nav>

      {/* HERO: LA FOTO ORIGINAL DEL FUEGO (ID: inicio) */}
      <section id="inicio" className="relative h-screen flex items-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
               className="w-full h-full object-cover brightness-[0.35] contrast-125 scale-105" alt="Steak on Fire Original" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl pt-20">
          <h4 className="font-sans text-[11px] tracking-[0.5em] uppercase text-[#BFA56A] mb-6 border-b border-[#BFA56A] inline-block pb-2">The Art of Fire & Meat</h4>
          <h1 className="font-serif text-6xl md:text-[6.5rem] leading-[0.95] uppercase mb-8 tracking-tighter">
            Donde el fuego <br /> 
            <span className="italic font-light text-gray-400 text-5xl md:text-[5rem]">se convierte en</span> <br/>
            experiencia
          </h1>
          <p className="font-sans text-gray-400 text-lg max-w-xl mb-10 font-light tracking-wide leading-relaxed">
            Cortes premium, maduración perfecta y brasas que despiertan los sentidos. Bienvenido a Res Brothers.
          </p>
          <div className="flex gap-6">
            <a href="#contacto" className="bg-[#BFA56A] text-black font-bold py-4 px-8 transition-all tracking-[0.2em] uppercase text-[10px]">Reservar Mesa</a>
            <a href="#carta" className="border border-white/20 hover:border-white text-white font-bold py-4 px-8 transition-all tracking-[0.2em] uppercase text-[10px]">Ver Carta</a>
          </div>
        </div>
      </section>

      {/* SECCIÓN: LA BURGER DE CHULETA */}
      <section className="bg-[#0D0D0D] py-32 px-6 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#BFA56A]/20 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop" alt="Burger" className="relative z-10 w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm" />
            <div className="absolute -bottom-10 -right-10 hidden md:block z-20">
              <div className="bg-[#BFA56A] p-8 text-black text-center shadow-2xl">
                <span className="block font-serif text-4xl font-bold italic">60</span>
                <span className="block font-sans text-[10px] font-bold tracking-[0.2em] uppercase">Días Maduración</span>
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="font-serif text-[#BFA56A] italic text-2xl mb-2">La Leyenda de Viapol</h3>
            <h2 className="font-serif text-5xl md:text-6xl uppercase mb-8 leading-none">Burger de <br/><span className="text-[#BFA56A]">Chuleta</span></h2>
            <p className="font-sans text-gray-400 font-light leading-relaxed mb-8 text-lg border-l-2 border-[#BFA56A]/50 pl-6">
              Nuestra pieza maestra. 200g de chuleta de vaca vieja madurada, picada a cuchillo, servida en pan brioche artesano y fundida con queso premium.
            </p>
          </div>
        </div>
      </section>

      {/* TARJETAS DE CORTES (CORTES QUE HABLAN) */}
      <section className="bg-[#0A0A0A] py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h4 className="font-sans text-[10px] tracking-[0.4em] text-[#BFA56A] uppercase mb-4">Nuestra Carne</h4>
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter text-white">
              Cortes que <span className="italic text-gray-400">hablan</span> por sí solos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Chuletón Madurado", 
                origin: "Origen: España", 
                age: "Maduración +45 días", 
                img: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop" // Foto: Chuletón grueso con hueso
              },
              { 
                name: "Tomahawk Black Angus", 
                origin: "Origen: Irlanda", 
                age: "Maduración +30 días", 
                img: "https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=800&auto=format&fit=crop" // Foto: Espectacular Tomahawk sobre tabla
              },
              { 
                name: "Wagyu A5", 
                origin: "Origen: Japón", 
                age: "Grado A5", 
                img: "https://images.unsplash.com/photo-1593030668930-8130abebd2b0?q=80&w=800&auto=format&fit=crop" // Foto: Carne cruda con altísima infiltración de grasa (marmoleo)
              },
              { 
                name: "Entrecot Premium", 
                origin: "Origen: España", 
                age: "Maduración +20 días", 
                img: "https://images.unsplash.com/photo-1601356616077-69572861798e?q=80&w=800&auto=format&fit=crop" // Foto: Entrecot grueso al punto perfecto
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0D0D0D] border border-white/5 p-5 group cursor-pointer hover:border-[#BFA56A]/30 transition-all">
                <div className="aspect-[4/3] overflow-hidden mb-5 rounded-sm">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                </div>
                <h4 className="font-serif text-lg uppercase text-white mb-2 group-hover:text-[#BFA56A] transition-colors">{item.name}</h4>
                <p className="font-sans text-[9px] text-gray-500 uppercase tracking-widest">{item.origin}</p>
                <p className="font-sans text-[9px] text-[#BFA56A] uppercase tracking-widest mt-1">{item.age}</p>
                <span className="inline-block mt-4 text-[9px] text-white uppercase tracking-widest border-b border-[#BFA56A] pb-1">Ver más +</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: LA CARTA DETALLADA (ID: carta) */}
      <section id="carta" className="bg-[#0D0D0D] py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h4 className="font-sans text-[10px] tracking-[0.4em] text-[#BFA56A] uppercase mb-4">Descubre nuestra esencia</h4>
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter text-white">
              La <span className="italic text-gray-400">Carta</span>
            </h2>
            <div className="h-[1px] w-24 bg-[#BFA56A]/50 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h3 className="font-serif text-2xl text-[#BFA56A] mb-10 uppercase tracking-widest border-b border-white/10 pb-4">De la Dehesa a la Brasa</h3>
              <div className="space-y-10">
                {[{ name: "Chuletón de Vaca Vieja", price: "85€ / kg", desc: "Maduración de 60 días. Sabor intenso y terneza excepcional." },
                  { name: "Tomahawk Premium", price: "95€ / kg", desc: "Corte espectacular con hueso largo. Infiltración perfecta." },
                  { name: "Entrecot Lomo Bajo", price: "32€", desc: "350g de carne seleccionada. Equilibrio perfecto." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg uppercase text-white group-hover:text-[#BFA56A] transition-colors">{item.name}</h4>
                      <span className="font-sans text-[#BFA56A] font-bold text-sm">{item.price}</span>
                    </div>
                    <p className="font-sans text-[11px] tracking-wider text-gray-500 uppercase leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
               <h3 className="font-serif text-2xl text-[#BFA56A] mb-10 uppercase tracking-widest border-b border-white/10 pb-4">Para Empezar y Acompañar</h3>
               <div className="space-y-10">
                {[{ name: "Provoleta al Carbón", price: "14€", desc: "Queso provolone fundido en cazuela de barro con tomate seco." },
                  { name: "Pimientos de Piquillo", price: "12€", desc: "Asados a la leña, confitados lentamente en AOVE." },
                  { name: "Patatas Trufadas", price: "8€", desc: "Gajos fritos crujientes, lascas de parmesano y aceite de trufa." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-lg uppercase text-white group-hover:text-[#BFA56A] transition-colors">{item.name}</h4>
                      <span className="font-sans text-[#BFA56A] font-bold text-sm">{item.price}</span>
                    </div>
                    <p className="font-sans text-[11px] tracking-wider text-gray-500 uppercase leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* GALERÍA DE EXPERIENCIA (FOTOS REALES) */}
      <section id="galeria" className="bg-[#0A0A0A] py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="font-sans text-[10px] tracking-[0.4em] text-[#BFA56A] uppercase mb-4">Galería</h4>
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter text-white">
              Ambiente, sabor, <span className="italic text-gray-400">momentos</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 1. Foto principal izquierda (Barriles - Archivo JPG genérico de la derecha) */}
            <div className="col-span-2 row-span-2 aspect-square md:aspect-auto overflow-hidden rounded-sm group">
               <img src="/abd5586a-4fe8-44a9-8570-4873ec24e0a7.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Interior Res Brothers Barriles" />
            </div>
            {/* 2. Foto arriba derecha (Corte Carne con Sal) */}
            <div className="aspect-square overflow-hidden rounded-sm group">
               <img src="/6acc295f-926e-4e07-a619-dcb02cf8969b.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detalle Carne a la brasa" />
            </div>
            {/* 3. Foto medio derecha (Logo - Es el único archivo PNG) */}
            <div className="aspect-square overflow-hidden rounded-sm group bg-white flex items-center justify-center p-4">
               <img src="/2cb66631-8693-4576-8ce3-d0cc4d710132.png" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" alt="Logo Res Brothers" />
            </div>
            {/* 4. Foto inferior (Comedor con clientes) */}
            <div className="col-span-2 aspect-[2/1] md:aspect-auto overflow-hidden rounded-sm group">
               <img src="/1543b1af-6dc6-47fa-a3e3-29a03808e4b3.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ambiente Salon Res Brothers" />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="border-b border-[#BFA56A] pb-1 font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-white hover:text-[#BFA56A] transition-colors">
              Ver Galería Completa
            </button>
          </div>
        </div>
      </section>

      {/* WIDGET DE RESERVAS Y MAPA COMBINADO (ID: contacto) */}
      <section id="contacto" className="bg-[#0D0D0D] py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h4 className="font-sans text-[10px] tracking-[0.4em] text-[#BFA56A] uppercase mb-4">Visítanos</h4>
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter text-white">
              Te esperamos en <span className="italic text-gray-400">Sevilla</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* BLOQUE IZQUIERDA: WIDGET DE RESERVAS INTEGRADO */}
            <div className="bg-[#0A0A0A] p-10 md:p-14 border border-white/5 shadow-2xl rounded-sm">
              <div className="text-center mb-12">
                <h3 className="font-serif text-4xl uppercase tracking-tighter mb-4">Asegure su <span className="italic text-[#BFA56A]">Mesa</span></h3>
                <p className="font-sans text-[10px] text-gray-500 tracking-[0.2em] uppercase">Confirmación instantánea de disponibilidad</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-widest text-gray-500 block">Fecha</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 p-4 font-sans text-xs focus:border-[#BFA56A] outline-none text-gray-300" />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-widest text-gray-500 block">Comensales</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 font-sans text-xs focus:border-[#BFA56A] outline-none text-gray-300">
                    <option>2 Personas</option><option>3 Personas</option><option>4 Personas</option><option>6+ Personas</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-widest text-gray-500 block">Turno</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-[#BFA56A]/10 border border-[#BFA56A]/30 p-3 text-[10px] hover:bg-[#BFA56A] hover:text-black transition-all">13:30</button>
                    <button className="bg-white/5 border border-white/10 p-3 text-[10px] hover:border-[#BFA56A] transition-all">21:00</button>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#BFA56A] hover:bg-white text-black font-bold py-5 transition-all tracking-[0.3em] uppercase text-[11px]">
                Ver Disponibilidad y Reservar
              </button>
               <p className="mt-8 text-[9px] text-gray-600 text-center tracking-widest uppercase">O llame directamente: 954 000 000</p>
            </div>

            {/* BLOQUE DERECHA: MAPA INTEGRADO */}
            <div className="relative h-full min-h-[400px] w-full grayscale contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700 rounded-sm overflow-hidden border border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.627918451152!2d-5.981881523450917!3d37.37500583505677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c04f9824de7%3A0xc6e4b8edab1159b4!2sAv.%20de%20Diego%20Mart%C3%ADnez%20Barrio%2C%2010b%2C%20Sur%2C%2041013%20Sevilla!5e0!3m2!1ses!2ses!4v1715525542152!5m2!1ses!2ses" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-[#0A0A0A]/40 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER FINAL */}
      <footer className="bg-black py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.3em] text-gray-500 uppercase">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
             <span className="font-serif text-2xl tracking-widest text-[#BFA56A] block mb-2">RES BROTHERS</span>
             <p>© 2026 Res Brothers Steak House. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Aviso Legal</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política Privacidad</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
            <span className="text-[#BFA56A] hover:text-white cursor-pointer transition-colors font-bold">Instagram</span>
          </div>
        </div>
      </footer>
    </main>
  );
}