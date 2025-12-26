import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ChevronRight,
  Send,
  Zap,
  Sword,
  Sparkles,
  Gem,
  Moon,
  Library,
  Pocket,
  Cpu
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showtime', href: '#home' },
    { name: 'The Phantom', href: '#about' },
    { name: 'Treasures', href: '#projects' },
    { name: 'Tricks', href: '#skills' },
  ];

  return (
    <div className="bg-[#020617] text-[#f8fafc] font-['Outfit'] min-h-screen relative selection:bg-blue-500/30">
      <div className="stars-container fixed pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] border-b border-white/5 transition-all duration-500 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-2xl py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-3xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            MAJMU<span className="text-blue-500">.</span>
          </motion.a>
          
          <ul className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">{link.name}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="bg-white text-black hover:bg-blue-50 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]">Connect</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
        
        {/* Moonlight Effect */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
               <span className="w-12 h-[1px] bg-blue-500"></span>
               <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">The Phantom Developer</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold leading-[0.9] mb-8 tracking-tighter italic font-serif">
              It's <br />
              <span className="kaito-gradient-text">Showtime!</span>
            </h1>
            <h2 className="text-2xl font-light text-slate-400 mb-10 max-w-md border-l-2 border-white/10 pl-6 leading-relaxed">
              Muhammad Jaja Maulana: Orchestrating high-performance web experiences with a touch of <span className="text-white font-medium">magic</span>.
            </h2>
            <div className="flex flex-wrap gap-6 mt-10">
              <a href="#projects" className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-[2px] font-black uppercase tracking-widest text-xs transition-all hover:bg-blue-600 hover:text-white hover:scale-105">
                Behold My Work <Sparkles size={16} />
              </a>
              <a href="#contact" className="group flex items-center gap-3 border border-white/20 px-10 py-5 rounded-[2px] text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                The Heist <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Playing Card Frame Effect */}
            <div className="relative z-10 max-w-xs group">
              <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
              <div className="relative border kaito-border p-2 bg-slate-900 shadow-2xl overflow-hidden rounded-[4px]">
                 <img src="/assets/4.png" alt="Kaito Kid Avatar" className="w-full grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute top-4 left-4 text-white/50 text-xl font-serif">A</div>
                 <div className="absolute bottom-4 right-4 text-white/50 text-xl font-serif rotate-180">A</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Card UI Element */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:block"
        >
            <div className="w-10 h-16 border kaito-border rounded-[4px] bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
            </div>
        </motion.div>
      </section>

      {/* About Section - The Phantom */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
             {[
               { icon: <Gem size={32} />, label: "Precision", val: "99%" },
               { icon: <Moon size={32} />, label: "Agility", val: "High" },
               { icon: <Zap size={32} />, label: "Performance", val: "100ms" },
               { icon: <Sparkles size={32} />, label: "Innovation", val: "Lead" }
             ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white/5 kaito-border rounded-[2px] hover:bg-blue-600/10 transition-colors group">
                   <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                   <h3 className="text-2xl font-bold mb-1">{item.val}</h3>
                   <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{item.label}</p>
                </div>
             ))}
          </div>
          <div className="order-1 md:order-2">
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Biography</span>
            <h2 className="text-6xl font-serif italic font-bold mb-10 leading-tight">Mastering the Art of <span className="kaito-gradient-text">Invisible Code</span>.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              Just like a phantom thief who leaves no trace, I build architectures that are seamless, efficient, and mysteriously powerful. My focus is on creating digital experiences that feel like magic to the user, while staying robust and professional under the hood.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              I specialize in the art of React, Full-Stack engineering, and the subtle craft of UI/UX perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Treasures (Projects) */}
      <section id="projects" className="py-32 bg-white/[0.01] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Heists</span>
              <h2 className="text-7xl font-serif italic font-bold tracking-tighter">Acquired <span className="kaito-gradient-text">Treasures</span></h2>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] md:max-w-xs mt-6 md:mt-0">Selective collection of work where performance meets elegance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "EcoShop Platform", desc: "A sustainable e-commerce solution with real-time inventory tracking.", tags: ["React", "Express", "Tailwind"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
              { title: "InsightFlow AI", desc: "Analytics dashboard powered by AI to predict market trends.", tags: ["Next.js", "Clerk", "Supabase"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
            ].map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="group kaito-border bg-[#020617] p-4 kaito-card-shadow transition-all"
              >
                <div className="h-80 overflow-hidden relative border border-white/5 mb-8">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest">Case Study</div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-3xl font-serif italic font-bold mb-4">{p.title}</h3>
                  <p className="text-slate-400 mb-8 font-light">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {p.tags.map(t => <span key={t} className="text-[10px] font-bold text-slate-500 border-b border-white/10 pb-1">{t}</span>)}
                  </div>
                  <a href="#" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors">
                    Explore Treasure <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Tricks */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Secret Techniques</span>
            <h2 className="text-7xl font-serif italic font-bold">The <span className="kaito-gradient-text">Tricks</span></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Library label="Frontend" />, label: "Illusion (UI/UX)" },
              { icon: <Cpu label="Backend" />, label: "The Engine" },
              { icon: <Pocket label="Full-stack" />, label: "Versatility" },
              { icon: <Gem label="Performance" />, label: "The Polish" }
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                className="p-12 border kaito-border flex flex-col items-center gap-6 text-center group"
              >
                <div className="text-white opacity-40 group-hover:opacity-100 group-hover:text-blue-500 transition-all">{s.icon}</div>
                <span className="text-xs font-black uppercase tracking-widest">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="kaito-border p-12 md:p-24 relative overflow-hidden bg-white/[0.01]">
            <div className="grid lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Inquiry</span>
                <h2 className="text-7xl font-serif italic font-bold mb-10 leading-tight">Leave a <br/><span className="kaito-gradient-text">Call Card</span>.</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
                  I'm currently accepting new heists and collaboration offers. Leave a message, and I shall appear at the appointed time.
                </p>
                <div className="flex gap-6">
                  {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
              <form className="space-y-6">
                <div className="relative border-b border-white/10 group focus-within:border-blue-500 transition-colors">
                   <input type="text" placeholder="Identity (Name)" className="w-full bg-transparent py-4 focus:outline-none placeholder:text-slate-600 text-white font-serif italic" />
                </div>
                <div className="relative border-b border-white/10 group focus-within:border-blue-500 transition-colors">
                   <input type="email" placeholder="Signal (Email)" className="w-full bg-transparent py-4 focus:outline-none placeholder:text-slate-600 text-white font-serif italic" />
                </div>
                <div className="relative border-b border-white/10 group focus-within:border-blue-500 transition-colors">
                   <textarea placeholder="The Message" rows="4" className="w-full bg-transparent py-4 focus:outline-none placeholder:text-slate-600 text-white font-serif italic"></textarea>
                </div>
                <button className="flex items-center gap-4 bg-white text-black px-12 py-6 font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all group">
                  Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-20 pointer-events-none italic font-serif text-9xl">
               MAGIC
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600 mb-4">&copy; 2025 Muhammad Jaja Maulana</p>
        <p className="text-[10px] italic font-serif text-slate-700">Under the pale moonlight.</p>
      </footer>
    </div>
  );
};

export default App;
