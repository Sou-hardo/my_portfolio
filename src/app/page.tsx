"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Palette, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 md:p-24 overflow-hidden min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center space-y-6"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-3 py-1 text-xs font-mono tracking-widest uppercase border border-white/10 rounded-full text-white/50"
        >
          Design & Engineering
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white">
          Crafting digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">experiences.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          I build high-performance web applications using modern technologies and a focus on exceptional user experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 group cursor-pointer"
          >
            View Projects 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Get in touch
          </motion.button>
        </div>
      </motion.div>

      {/* Skills / Tech Stack Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-32 max-w-6xl w-full"
      >
        {[
          { icon: <Terminal className="w-6 h-6" />, title: "Next.js", desc: "For scalable, high-performance apps." },
          { icon: <Code className="w-6 h-6" />, title: "TypeScript", desc: "Type-safe, reliable infrastructure." },
          { icon: <Layout className="w-6 h-6" />, title: "Tailwind", desc: "Bespoke, responsive UI design." },
          { icon: <Palette className="w-6 h-6" />, title: "Framer", desc: "Immersive motion and interactions." }
        ].map((skill, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
              <span className="text-white/70 group-hover:text-blue-500 transition-colors">
                {skill.icon}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Footer / Contact Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-40 text-center w-full max-w-4xl"
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
        <p className="text-white/30 font-mono text-sm uppercase tracking-widest">
          Build with MDX & Framer Motion
        </p>
      </motion.div>
    </div>
  );
}
