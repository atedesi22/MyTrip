import React from 'react';
import { MapPin, Plane, Home, Coffee, Car, Heart, Play, Mic, ShieldCheck, Map as MapIcon, Menu, X, Globe } from 'lucide-react';
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

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const menuItems = [
        { name: 'Transport', icon: Car, href: '#vtc' },
        { name: 'Vols', icon: Plane, href: '#vols' },
        { name: 'Hébergement', icon: Home, href: '#host' }, // Nouveau
        { name: 'Tourisme', icon: Globe, href: '#tourisme' },
        { name: 'Détente', icon: Coffee, href: '#detente' },
        { name: 'Immigration', icon: ShieldCheck, href: '#immigration' },
    ];

    return (
        <nav className="fixed w-full z-[100] px-4 md:px-6 py-4">
            <div className="max-w-7xl mx-auto nova-glass-card rounded-full px-6 py-3 flex justify-between items-center border border-white/10">
                <div className="text-xl font-black tracking-tighter">
                    My<span className="text-nova-purple">Trip</span>
                </div>

                {/* Desktop Menu - On affiche tout pour le pro-look */}
                <div className="hidden lg:flex items-center gap-6 text-[12px] uppercase tracking-widest font-bold">
                    {menuItems.map((item) => (
                        <a key={item.name} href={item.href} className="hover:text-nova-cyan transition-colors">
                            {item.name}
                        </a>
                    ))}
                    <button className="nova-btn-neon px-5 py-2 rounded-full text-[10px]">Connexion</button>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Full Screen Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden mt-2 nova-glass-card rounded-3xl p-8 flex flex-col gap-6"
                >
                    {menuItems.map((item) => (
                        <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-lg font-medium border-b border-white/5 pb-2">
                            <item.icon className="text-nova-cyan" size={24} /> {item.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Image de fond avec overlay progressif */}
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80"
                alt="Travel background"
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950 to-slate-950"></div>
        </div>

        <div className="relative z-10 text-center px-6">
            <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
            >
                L'Aventure <br /> <span className="text-gradient-nova">Sans Limite</span>
            </motion.h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Du trajet quotidien en VTC à votre projet d'expatriation au Canada, MyTrip vous accompagne à chaque étape.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="nova-btn-neon px-8 py-4 rounded-full font-bold">Planifier un voyage</button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">Explorer la NovaMap</button>
            </div>
        </div>
    </section>
);

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

const ModuleGrid = ({ delay = 0 }) => {
    const modules = [
        {
            title: "Hébergement Nova",
            desc: "Des séjours uniques, des villas aux appartements connectés. Le confort AirBnB avec la sécurité NovaVerse.",
            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
            icon: Home,
            color: "text-emerald-400",
            id: "host"
        },
        {
            title: "Tourisme & Culture",
            desc: "Explorez des joyaux cachés. Nos guides locaux utilisent les 'Vocaux' pour vous raconter l'histoire des lieux.",
            img: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80",
            icon: Globe,
            color: "text-nova-cyan",
            id: "tourisme"
        },
        {
            title: "VTC & Covoiturage",
            desc: "Déplacez-vous avec style. Partagez votre trajet avec des personnes partageant votre 'Vibe'.",
            img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
            icon: Car,
            color: "text-blue-400",
            id: "vtc"
        },
        {
            title: "Objectif Canada",
            desc: "Votre pont vers l'Amérique du Nord. Immigration, emploi et intégration facilités par NovaAI.",
            img: "https://images.unsplash.com/photo-1503125558445-e1b013c6693d?auto=format&fit=crop&q=80",
            icon: ShieldCheck,
            color: "text-nova-purple",
            id: "immigration"
        }
    ];

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {modules.map((mod, index) => (
                    <motion.div
                        key={index}
                        id={mod.id}
                        whileHover={{ scale: 1.02 }}
                        className="group relative h-[450px] rounded-[40px] overflow-hidden nova-glass-card"
                    >
                        <img
                            src={mod.img}
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                            alt={mod.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                            <div className={`p-3 rounded-2xl bg-white/5 w-fit mb-6 border border-white/10 ${mod.color}`}>
                                <mod.icon size={32} />
                            </div>
                            <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">{mod.title}</h3>
                            <p className="text-slate-300 text-lg leading-relaxed">{mod.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const MyTripLanding = () => {
    return (
        <main>
            <Navbar />
            <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white overflow-hidden font-sans">
                <Hero />
                <ModuleGrid />

                {/* --- BG DECORATIONS (Éléments Flottants de fond) --- */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nova-purple/20 rounded-full blur-[128px] pointer-events-none z-0"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nova-cyan/10 rounded-full blur-[128px] pointer-events-none z-0"></div>
                <div className="absolute top-0 right-0 p-10 text-white/5 z-0 font-black text-9xl tracking-tighter select-none">Nova</div>

                <footer className="text-center p-10 text-slate-600 text-xs border-t border-white/5 relative z-10">
                    MyTrip © 2024 - Part of NovaVerse Global
                </footer>
            </div>
        </main>
    );
};

export default MyTripLanding;