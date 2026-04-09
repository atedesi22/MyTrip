import React from 'react';
import { Search, User, Briefcase, MapPin, Plane, Home, Coffee, Car, Heart, Play, Mic, ShieldCheck, Map as MapIcon, Menu, X, Globe } from 'lucide-react';
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

const DesktopNavbar = () => (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 hidden lg:block">
        <div className="max-w-7xl mx-auto nova-glass-card rounded-full px-6 py-3 flex justify-between items-center border border-white/10">
            <div className="text-xl font-black tracking-tighter text-white">
                My<span className="text-nova-purple">Trip</span>
            </div>
            <div className="flex items-center gap-6 text-[12px] uppercase tracking-widest font-bold text-slate-300">
                <a href="#vols" className="hover:text-nova-cyan transition">Vols</a>
                <a href="#host" className="hover:text-nova-cyan transition">Hébergement</a>
                <a href="#vtc" className="hover:text-nova-cyan transition">Transport</a>
                <a href="#immigration" className="hover:text-nova-cyan transition">Immigration</a>
                <button className="nova-btn-neon px-5 py-2 rounded-full text-[10px] text-white">Connexion</button>
            </div>
        </div>
    </nav>
);

// 2. Mobile Navbar Bottom (Le cœur de l'expérience native)
const MobileNavbarBottom = () => {
    // Définition des onglets principaux type App
    const navItems = [
        { name: 'Explorer', icon: Search, href: '#' },
        { name: 'Voyage', icon: Plane, href: '#vols' },
        { name: 'Moi', icon: User, href: '#profile' }, // Simule le profil NovaVerse
        { name: 'Immigration', icon: Briefcase, href: '#immigration' },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-6 pt-2 lg:hidden">
            {/* L'effet Glassmorphism est crucial ici pour le look natif */}
            <div className="nova-glass-card rounded-full flex justify-around items-center h-16 border border-white/10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
                {navItems.map((item, index) => (
                    <a key={item.name} href={item.href} className="flex flex-col items-center gap-1 text-slate-400 active:text-nova-cyan focus:text-nova-cyan">
                        {/* Icônes légèrement plus grandes pour le tactile */}
                        <item.icon size={22} strokeWidth={1.5} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

// 3. Carte de Module Adaptative
const ModuleCard = ({ title, desc, img, icon: Icon, color, id }) => (
    <motion.div
        id={id}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }} // Effet de pression au toucher
        // La hauteur est réduite sur mobile (h-[300px]) par rapport à desktop (lg:h-[450px])
        className="group relative h-[300px] lg:h-[450px] rounded-[30px] lg:rounded-[40px] overflow-hidden nova-glass-card"
    >
        <img
            src={img}
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 lg:p-10 flex flex-col justify-end">
            {/* Icône plus petite sur mobile */}
            <div className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-white/5 w-fit mb-4 lg:mb-6 border border-white/10 ${color}`}>
                <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
            </div>
            {/* Titre et description adaptatifs */}
            <h3 className="text-2xl lg:text-4xl font-black text-white mb-2 lg:mb-4 tracking-tighter">{title}</h3>
            <p className="text-slate-300 text-sm lg:text-lg leading-relaxed lg:leading-relaxed max-w-xl">{desc}</p>
        </div>
    </motion.div>
);

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
                <div className="text-xl text-white font-black tracking-tighter">
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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-10 lg:pt-20">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
            <img
                src="/assets/images/hero.jpeg"
                alt="Travel background"
                className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950 to-slate-950"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            {/* Badge flottant plus petit sur mobile */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 inline-block px-3 py-1 rounded-full border border-nova-cyan/30 bg-nova-cyan/5 text-nova-cyan text-[10px] lg:text-xs font-mono uppercase tracking-widest"
            >
                Membre de l'Écosystème NovaVerse
            </motion.div>

            {/* Titre : réduction de taille sur mobile text-5xl -> text-6xl lg:text-8xl */}
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-8xl font-black mb-5 lg:mb-8 tracking-tighter leading-none"
            >
                L'Aventure <br /> <span className="text-gradient-nova">Sans Limite</span>
            </motion.h2>

            {/* Description adaptée */}
            <p className="text-slate-400 text-sm lg:text-xl max-w-xl lg:max-w-2xl mx-auto mb-10 lg:mb-12">
                VTC, Vols, Hébergement et votre projet d'immigration au Canada. MyTrip centralise tout votre voyage.
            </p>

            {/* CTA Buttons - Colonne sur mobile, ligne sur desktop */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="nova-btn-neon px-8 py-4 rounded-full font-bold text-sm lg:text-lg">Planifier un voyage</button>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full font-bold text-sm lg:text-lg hover:bg-white/10 transition">Explorer</button>
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
            title: "Objectif Immigration",
            desc: "Votre pont vers le monde. Immigration, emploi et intégration facilités par NovaTravel.",
            img: "/assets/images/immigration1.jpeg",
            icon: ShieldCheck,
            color: "text-nova-purple",
            id: "immigration"
        }
    ];

    return (
        <section className="py-16 lg:py-24 px-4 lg:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
            <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white overflow-hidden font-sans">
                <DesktopNavbar />
                <MobileNavbarBottom />
                <Hero />
                <ModuleGrid />

                {/* --- BG DECORATIONS (Éléments Flottants de fond) --- */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nova-purple/20 rounded-full blur-[128px] pointer-events-none z-0"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nova-cyan/10 rounded-full blur-[128px] pointer-events-none z-0"></div>
                <div className="absolute top-0 right-0 p-10 text-white/5 z-0 font-black text-9xl tracking-tighter select-none">Nova</div>

                <footer className="text-center p-8 lg:p-10 text-slate-600 text-xs border-t border-white/5 relative z-10">
                    MyTrip © 2026 - Part of NovaVerse Global
                    <div className="lg:hidden mt-2 font-mono text-[10px]">Utilisez la barre du bas pour naviguer</div>
                </footer>
            </div>
        </main>
    );
};

export default MyTripLanding;