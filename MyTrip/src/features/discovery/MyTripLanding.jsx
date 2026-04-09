import React from 'react';
import { MapPin, PlaneTakeoff, Car, Heart, Play, Mic } from 'lucide-react';
import { motion } from 'framer-motion'; // Pour des animations avancées

// 1. Définition de l'animation de flottement (Floating)
const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10], // Mouvement de haut en bas
        transition: {
            duration: 4, // Temps d'un cycle
            ease: "easeInOut",
            repeat: Infinity, // Boucle infinie
        }
    }
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    variants={floatingAnimation}
    initial="initial"
    animate="animate"
    transition={{ delay: delay }}
    className="nova-glass-card p-6 rounded-2xl flex flex-col items-center text-center"
  >
    <div className="p-4 rounded-full bg-white/5 mb-4">
      <Icon className="w-10 h-10 text-cyan-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
  </motion.div>
);

const MyTripLanding = () => {
    return (
        // 3. Fond sombre dégradé
        <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white overflow-hidden font-sans">

            {/* --- HEADER --- */}
            <header className="p-5 flex justify-between items-center border-b border-white/5 relative z-50">
                <h1 className="text-2xl font-black text-white tracking-tighter">
                    My<span className="text-nova-purple">Trip</span>
                </h1>
                <button className="text-sm px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                    Se connecter
                </button>
            </header>

            {/* --- HERO SECTION (Mobile-First) --- */}
            <main className="container mx-auto px-6 py-16 md:py-24 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Badge Flottant "NovaVerse" */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 px-4 py-1 rounded-full border border-nova-cyan/30 bg-nova-cyan/5 text-nova-cyan text-xs font-mono uppercase tracking-widest"
                    >
                        Membre de l'Écosystème NovaVerse
                    </motion.div> */}

                    {/* Titre Principal (Grand et Impactant) */}
                    {/* <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6"
                    >
                        Le Voyage <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-purple via-nova-cyan to-nova-purple animate-gradient-xy">
                            Redéfini
                        </span>.
                    </motion.h2> */}

                    {/* Description */}
                    {/* <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12"
                    >
                        MyTrip fusionne transport instantané, planification globale et découverte de lieux d'exception basés sur la vibe de la communauté.
                    </motion.p> */}

                    {/* CTA Button */}
                    {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-gradient-to-r from-nova-purple to-nova-cyan rounded-full font-bold text-lg shadow-nova-neon hover:shadow-nova-neon-hover transition-shadow duration-300"
>
                        Commencer l'Exploration
                    </motion.button> */}

                    {/* Dans le Hero */}
<h2 className="text-5xl md:text-7xl font-extrabold mb-6">
  Le Voyage <br />
  <span className="text-gradient-nova">Redéfini</span>.
</h2>

<button className="nova-btn-neon px-10 py-4 rounded-full font-bold text-lg text-white">
  Commencer l'Exploration
</button>
                </div>

                {/* --- FEATURES GRID (Flottantes) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
                    <FeatureCard
                        icon={MapPin}
                        title="NovaMap Live"
                        description="Visualisez la ville en temps réel. Chauffeurs, covoitureurs et lieux chauds."
                        delay={0}
                    />
                    <FeatureCard
                        icon={PlaneTakeoff}
                        title="Moteur de Voyage"
                        description="Réservez vols et hôtels instantanément via notre méta-moteur."
                        delay={0.5}
                    />
                    <FeatureCard
                        icon={Car}
                        title="VTC & Covoiturage"
                        description="Commandez une course ou rejoignez un trajet selon votre vibe."
                        delay={1}
                    />
                    <FeatureCard
                        icon={Heart}
                        title="Lieux de Détente"
                        description="Spas, Restos, Parcs. Validés par les Vocaux et Instants de la communauté."
                        delay={1.5}
                    />
                </div>

                {/* --- SOCIAL PROOF PREVIEW (Section Bluffante) --- */}
                <div className="mt-32 p-10 glass-morphism rounded-3xl border border-white/5 relative">
                    <div className="absolute -top-6 left-10 p-4 rounded-full bg-nova-purple">
                        <Mic className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h4 className="text-3xl font-bold tracking-tight mb-3">Vocal Proof : La vibe pure.</h4>
                            <p className="text-slate-300 mb-6">Fini les avis étoilés. Écoutez l'ambiance réelle d'un lieu avant d'y aller. Une note vocale de 10s change tout.</p>
                            <div className="flex gap-4">
                                <button className="text-xs px-4 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">Écouter un exemple</button>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl aspect-video bg-black/50 border border-white/10 flex items-center justify-center">
                            <Play className="w-12 h-12 text-white/50 group-hover:text-nova-cyan transition-colors" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <span className="absolute bottom-3 left-3 text-xs font-mono">Instant de : La Playa, Kribi</span>
                        </div>
                    </div>
                </div>

            </main>

            {/* --- BG DECORATIONS (Éléments Flottants de fond) --- */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nova-purple/20 rounded-full blur-[128px] pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nova-cyan/10 rounded-full blur-[128px] pointer-events-none z-0"></div>
            <div className="absolute top-0 right-0 p-10 text-white/5 z-0 font-black text-9xl tracking-tighter select-none">Nova</div>

            <footer className="text-center p-10 text-slate-600 text-xs border-t border-white/5 relative z-10">
                MyTrip © 2024 - Part of NovaVerse Global
            </footer>
        </div>
    );
};

export default MyTripLanding;