import fs from "fs";
import path from "path";

// Read the main HTML template
const htmlTemplate = fs.readFileSync("client/index.html", "utf8");

// Create a static HTML file with inline styles and bundled React components
const staticHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Prasath Murugesan - AI/ML Consultant & Passionate Engineer</title>
    <meta name="description" content="Prasath Murugesan - AI/ML Consultant & Passionate Engineer based in New York City. Expert in Data Science, Machine Learning, and AI solutions with experience in FinTech, AdTech, and more.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/lucide-react@0.263.1/dist/umd/lucide-react.js"></script>
    <style>
        /* Tailwind CSS Base */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --background: hsl(240, 10%, 3.9%);
            --foreground: hsl(0, 0%, 98%);
            --muted: hsl(240, 3.7%, 15.9%);
            --muted-foreground: hsl(240, 5%, 64.9%);
            --popover: hsl(240, 10%, 3.9%);
            --popover-foreground: hsl(0, 0%, 98%);
            --card: hsl(240, 10%, 3.9%);
            --card-foreground: hsl(0, 0%, 98%);
            --border: hsl(240, 3.7%, 15.9%);
            --input: hsl(240, 3.7%, 15.9%);
            --primary: hsl(262, 83%, 58%);
            --primary-foreground: hsl(210, 40%, 98%);
            --secondary: hsl(262, 90%, 50%);
            --secondary-foreground: hsl(0, 0%, 98%);
            --accent: hsl(240, 3.7%, 15.9%);
            --accent-foreground: hsl(0, 0%, 98%);
            --destructive: hsl(0, 62.8%, 30.6%);
            --destructive-foreground: hsl(0, 0%, 98%);
            --ring: hsl(240, 4.9%, 83.9%);
            --radius: 0.5rem;
            
            /* Custom glassmorphism colors */
            --glass: hsla(262, 83%, 58%, 0.1);
            --glass-border: hsla(255, 255%, 255%, 0.1);
            --surface: hsl(240, 10%, 7%);
            --deep: hsl(240, 15%, 4%);
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: var(--deep);
            color: var(--foreground);
            overflow-x: hidden;
            line-height: 1.5;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        .glassmorphism {
            background: var(--glass);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
        }
        
        .glass-nav {
            background: hsla(240, 10%, 7%, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid hsla(262, 83%, 58%, 0.2);
        }
        
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px hsla(262, 83%, 58%, 0.3);
        }
        
        .font-poppins {
            font-family: 'Poppins', sans-serif;
        }
        
        .font-jetbrains {
            font-family: 'JetBrains Mono', monospace;
        }
        
        /* Animations */
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
            0% { box-shadow: 0 0 20px hsla(262, 83%, 58%, 0.3); }
            100% { box-shadow: 0 0 30px hsla(262, 83%, 58%, 0.6); }
        }
        
        @keyframes slideUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        .animate-slide-up {
            animation: slideUp 0.6s ease-out;
        }
        
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
        }
        
        /* Utility classes */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .flex {
            display: flex;
        }
        
        .inline-flex {
            display: inline-flex;
        }
        
        .items-center {
            align-items: center;
        }
        
        .justify-center {
            justify-content: center;
        }
        
        .space-x-6 > * + * {
            margin-left: 1.5rem;
        }
        
        .space-x-8 > * + * {
            margin-left: 2rem;
        }
        
        .space-y-8 > * + * {
            margin-top: 2rem;
        }
        
        .text-center {
            text-align: center;
        }
        
        .text-white {
            color: white;
        }
        
        .text-gray-300 {
            color: rgb(209, 213, 219);
        }
        
        .text-gray-400 {
            color: rgb(156, 163, 175);
        }
        
        .text-gray-500 {
            color: rgb(107, 114, 128);
        }
        
        .text-primary {
            color: var(--primary);
        }
        
        .text-secondary {
            color: var(--secondary);
        }
        
        .bg-gradient-to-r {
            background: linear-gradient(to right, var(--primary), var(--secondary));
        }
        
        .bg-gradient-to-br {
            background: linear-gradient(to bottom right, var(--deep), var(--surface));
        }
        
        .bg-clip-text {
            -webkit-background-clip: text;
            background-clip: text;
        }
        
        .text-transparent {
            color: transparent;
        }
        
        .rounded-full {
            border-radius: 9999px;
        }
        
        .rounded-2xl {
            border-radius: 1rem;
        }
        
        .rounded-3xl {
            border-radius: 1.5rem;
        }
        
        .rounded-xl {
            border-radius: 0.75rem;
        }
        
        .min-h-screen {
            min-height: 100vh;
        }
        
        .fixed {
            position: fixed;
        }
        
        .absolute {
            position: absolute;
        }
        
        .relative {
            position: relative;
        }
        
        .top-6 {
            top: 1.5rem;
        }
        
        .left-1\/2 {
            left: 50%;
        }
        
        .transform {
            transform: translateX(-50%);
        }
        
        .z-50 {
            z-index: 50;
        }
        
        .z-\\[-1\\] {
            z-index: -1;
        }
        
        .w-full {
            width: 100%;
        }
        
        .h-full {
            height: 100%;
        }
        
        .w-32 {
            width: 8rem;
        }
        
        .h-32 {
            width: 8rem;
        }
        
        .w-6 {
            width: 1.5rem;
        }
        
        .h-6 {
            height: 1.5rem;
        }
        
        .w-4 {
            width: 1rem;
        }
        
        .h-4 {
            height: 1rem;
        }
        
        .max-w-4xl {
            max-width: 56rem;
        }
        
        .max-w-6xl {
            max-width: 72rem;
        }
        
        .max-w-7xl {
            max-width: 80rem;
        }
        
        .max-w-2xl {
            max-width: 42rem;
        }
        
        .mx-auto {
            margin-left: auto;
            margin-right: auto;
        }
        
        .mb-4 {
            margin-bottom: 1rem;
        }
        
        .mb-6 {
            margin-bottom: 1.5rem;
        }
        
        .mb-8 {
            margin-bottom: 2rem;
        }
        
        .mb-12 {
            margin-bottom: 3rem;
        }
        
        .ml-2 {
            margin-left: 0.5rem;
        }
        
        .p-4 {
            padding: 1rem;
        }
        
        .p-6 {
            padding: 1.5rem;
        }
        
        .p-8 {
            padding: 2rem;
        }
        
        .p-12 {
            padding: 3rem;
        }
        
        .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }
        
        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        
        .px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
        }
        
        .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
        
        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }
        
        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        
        .py-12 {
            padding-top: 3rem;
            padding-bottom: 3rem;
        }
        
        .py-20 {
            padding-top: 5rem;
            padding-bottom: 5rem;
        }
        
        .text-sm {
            font-size: 0.875rem;
        }
        
        .text-lg {
            font-size: 1.125rem;
        }
        
        .text-xl {
            font-size: 1.25rem;
        }
        
        .text-2xl {
            font-size: 1.5rem;
        }
        
        .text-4xl {
            font-size: 2.25rem;
        }
        
        .text-5xl {
            font-size: 3rem;
        }
        
        .font-medium {
            font-weight: 500;
        }
        
        .font-semibold {
            font-weight: 600;
        }
        
        .font-bold {
            font-weight: 700;
        }
        
        .leading-relaxed {
            line-height: 1.625;
        }
        
        .border-4 {
            border-width: 4px;
        }
        
        .border-t {
            border-top-width: 1px;
        }
        
        .border-white\\/10 {
            border-color: rgba(255, 255, 255, 0.1);
        }
        
        .border-primary\\/30 {
            border-color: hsla(262, 83%, 58%, 0.3);
        }
        
        .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .object-cover {
            object-fit: cover;
        }
        
        .transition-colors {
            transition: color 0.15s ease-in-out;
        }
        
        .transition-transform {
            transition: transform 0.15s ease-in-out;
        }
        
        .transition-all {
            transition: all 0.15s ease-in-out;
        }
        
        .hover\\:text-primary:hover {
            color: var(--primary);
        }
        
        .hover\\:scale-105:hover {
            transform: scale(1.05);
        }
        
        .hover\\:bg-primary\\/20:hover {
            background-color: hsla(262, 83%, 58%, 0.2);
        }
        
        .opacity-20 {
            opacity: 0.2;
        }
        
        .opacity-0 {
            opacity: 0;
        }
        
        .opacity-100 {
            opacity: 1;
        }
        
        .translate-y-0 {
            transform: translateY(0);
        }
        
        .translate-y-8 {
            transform: translateY(2rem);
        }
        
        .duration-700 {
            transition-duration: 700ms;
        }
        
        .pointer-events-none {
            pointer-events: none;
        }
        
        .cursor-pointer {
            cursor: pointer;
        }
        
        /* Grid */
        .grid {
            display: grid;
        }
        
        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        
        .gap-8 {
            gap: 2rem;
        }
        
        /* Responsive */
        @media (min-width: 768px) {
            .md\\:text-6xl {
                font-size: 3.75rem;
            }
            
            .md\\:text-2xl {
                font-size: 1.5rem;
            }
            
            .md\\:p-12 {
                padding: 3rem;
            }
            
            .md\\:flex-row {
                flex-direction: row;
            }
            
            .md\\:items-center {
                align-items: center;
            }
            
            .md\\:justify-between {
                justify-content: space-between;
            }
            
            .md\\:grid-cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        
        @media (min-width: 1024px) {
            .lg\\:grid-cols-3 {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
        
        /* Timeline styles */
        .timeline-line {
            position: absolute;
            left: 2rem;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
        }
        
        .timeline-dot {
            position: absolute;
            left: 1.5rem;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            border: 4px solid var(--surface);
        }
        
        .timeline-content {
            position: relative;
            padding-left: 5rem;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <script>
        const { useState, useEffect, createElement: h } = React;
        const { createRoot } = ReactDOM;
        const { Linkedin, Github, Twitter, ArrowDown } = LucideReact;
        
        // Geometric Background Component
        function GeometricBackground() {
            return h('div', {
                className: 'geometric-bg fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]'
            }, h('svg', {
                className: 'w-full h-full opacity-20',
                viewBox: '0 0 1920 1080',
                preserveAspectRatio: 'xMidYMid slice'
            }, [
                h('defs', { key: 'defs' }, [
                    h('linearGradient', { key: 'grad1', id: 'grad1', x1: '0%', y1: '0%', x2: '100%', y2: '100%' }, [
                        h('stop', { key: 'stop1', offset: '0%', style: { stopColor: '#8B5CF6', stopOpacity: 0.3 } }),
                        h('stop', { key: 'stop2', offset: '100%', style: { stopColor: '#A855F7', stopOpacity: 0.1 } })
                    ]),
                    h('filter', { key: 'glow', id: 'glow' }, [
                        h('feGaussianBlur', { key: 'blur', stdDeviation: '3', result: 'coloredBlur' }),
                        h('feMerge', { key: 'merge' }, [
                            h('feMergeNode', { key: 'node1', in: 'coloredBlur' }),
                            h('feMergeNode', { key: 'node2', in: 'SourceGraphic' })
                        ])
                    ])
                ]),
                h('path', {
                    key: 'path1',
                    d: 'M0,200 Q480,100 960,300 T1920,200',
                    stroke: 'url(#grad1)',
                    strokeWidth: '2',
                    fill: 'none',
                    filter: 'url(#glow)'
                }, h('animate', {
                    attributeName: 'd',
                    dur: '15s',
                    repeatCount: 'indefinite',
                    values: 'M0,200 Q480,100 960,300 T1920,200;M0,300 Q480,200 960,100 T1920,400;M0,200 Q480,100 960,300 T1920,200'
                })),
                h('path', {
                    key: 'path2',
                    d: 'M0,500 Q480,400 960,600 T1920,500',
                    stroke: 'url(#grad1)',
                    strokeWidth: '2',
                    fill: 'none',
                    filter: 'url(#glow)',
                    opacity: '0.6'
                }, h('animate', {
                    attributeName: 'd',
                    dur: '20s',
                    repeatCount: 'indefinite',
                    values: 'M0,500 Q480,400 960,600 T1920,500;M0,600 Q480,500 960,400 T1920,700;M0,500 Q480,400 960,600 T1920,500'
                })),
                h('circle', {
                    key: 'circle1',
                    cx: '150',
                    cy: '150',
                    r: '80',
                    fill: 'url(#grad1)',
                    opacity: '0.1',
                    filter: 'url(#glow)'
                }, h('animate', {
                    attributeName: 'cy',
                    dur: '10s',
                    repeatCount: 'indefinite',
                    values: '150;200;150'
                })),
                h('circle', {
                    key: 'circle2',
                    cx: '1750',
                    cy: '900',
                    r: '120',
                    fill: 'url(#grad1)',
                    opacity: '0.08',
                    filter: 'url(#glow)'
                }, h('animate', {
                    attributeName: 'cx',
                    dur: '12s',
                    repeatCount: 'indefinite',
                    values: '1750;1650;1750'
                })),
                h('g', { key: 'nodes', opacity: '0.3' }, [
                    h('circle', { key: 'node1', cx: '300', cy: '400', r: '4', fill: '#8B5CF6', filter: 'url(#glow)' }),
                    h('circle', { key: 'node2', cx: '600', cy: '300', r: '4', fill: '#A855F7', filter: 'url(#glow)' }),
                    h('circle', { key: 'node3', cx: '900', cy: '500', r: '4', fill: '#8B5CF6', filter: 'url(#glow)' }),
                    h('line', { key: 'line1', x1: '300', y1: '400', x2: '600', y2: '300', stroke: '#8B5CF6', strokeWidth: '1', opacity: '0.5' }),
                    h('line', { key: 'line2', x1: '600', y1: '300', x2: '900', y2: '500', stroke: '#A855F7', strokeWidth: '1', opacity: '0.5' })
                ])
            ]));
        }
        
        // Navigation Component
        function Navigation() {
            const [activeSection, setActiveSection] = useState('hero');
            
            useEffect(() => {
                const handleScroll = () => {
                    const sections = ['hero', 'about', 'experience', 'education', 'projects'];
                    const scrollY = window.scrollY;
                    
                    for (const section of sections) {
                        const element = document.getElementById(section);
                        if (element) {
                            const offsetTop = element.offsetTop - 100;
                            const height = element.offsetHeight;
                            
                            if (scrollY >= offsetTop && scrollY < offsetTop + height) {
                                setActiveSection(section);
                                break;
                            }
                        }
                    }
                };
                
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);
            
            const scrollToSection = (sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
            
            return h('nav', {
                className: 'fixed top-6 left-1/2 transform z-50 glass-nav rounded-full px-8 py-4 animate-slide-up'
            }, h('div', {
                className: 'flex items-center space-x-8'
            }, [
                h('button', {
                    key: 'home',
                    onClick: () => scrollToSection('hero'),
                    className: \`font-poppins font-bold text-lg hover:text-secondary transition-colors \${activeSection === 'hero' ? 'text-primary' : 'text-white'}\`
                }, 'வணக்கம்!'),
                h('button', {
                    key: 'about',
                    onClick: () => scrollToSection('about'),
                    className: \`hover:text-primary transition-colors \${activeSection === 'about' ? 'text-primary' : 'text-white'}\`
                }, 'About'),
                h('button', {
                    key: 'experience',
                    onClick: () => scrollToSection('experience'),
                    className: \`hover:text-primary transition-colors \${activeSection === 'experience' ? 'text-primary' : 'text-white'}\`
                }, 'Experience'),
                h('button', {
                    key: 'education',
                    onClick: () => scrollToSection('education'),
                    className: \`hover:text-primary transition-colors \${activeSection === 'education' ? 'text-primary' : 'text-white'}\`
                }, 'Education'),
                h('button', {
                    key: 'projects',
                    onClick: () => scrollToSection('projects'),
                    className: \`hover:text-primary transition-colors \${activeSection === 'projects' ? 'text-primary' : 'text-white'}\`
                }, 'Projects')
            ]));
        }
        
        // Hero Section Component
        function HeroSection() {
            const scrollToAbout = () => {
                const element = document.getElementById('about');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
            
            return h('section', {
                id: 'hero',
                className: 'min-h-screen flex items-center justify-center px-4 py-20'
            }, h('div', {
                className: 'container mx-auto text-center animate-fade-in'
            }, h('div', {
                className: 'glassmorphism rounded-3xl p-12 max-w-4xl mx-auto hover-lift'
            }, [
                h('div', {
                    key: 'avatar',
                    className: 'mb-8 animate-float'
                }, h('img', {
                    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
                    alt: 'Prasath Murugesan',
                    className: 'w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-2xl object-cover'
                })),
                h('h1', {
                    key: 'title',
                    className: 'text-5xl md:text-6xl font-poppins font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent'
                }, 'Prasath Murugesan'),
                h('h2', {
                    key: 'subtitle',
                    className: 'text-xl md:text-2xl text-gray-300 mb-6 font-medium'
                }, 'AI/ML Consultant & Passionate Engineer'),
                h('p', {
                    key: 'location',
                    className: 'text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto'
                }, 'Based out of New York City, from India.'),
                h('div', {
                    key: 'social',
                    className: 'flex justify-center space-x-6 mb-8'
                }, [
                    h('a', {
                        key: 'linkedin',
                        href: '#',
                        className: 'glassmorphism rounded-full p-4 hover:bg-primary/20 transition-all hover-lift'
                    }, h(Linkedin, { className: 'text-primary text-xl w-6 h-6' })),
                    h('a', {
                        key: 'github',
                        href: '#',
                        className: 'glassmorphism rounded-full p-4 hover:bg-primary/20 transition-all hover-lift'
                    }, h(Github, { className: 'text-primary text-xl w-6 h-6' })),
                    h('a', {
                        key: 'twitter',
                        href: '#',
                        className: 'glassmorphism rounded-full p-4 hover:bg-primary/20 transition-all hover-lift'
                    }, h(Twitter, { className: 'text-primary text-xl w-6 h-6' }))
                ]),
                h('button', {
                    key: 'cta',
                    onClick: scrollToAbout,
                    className: 'inline-flex items-center bg-gradient-to-r px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform animate-glow'
                }, [
                    'Connect With Me',
                    h(ArrowDown, { key: 'arrow', className: 'ml-2 w-4 h-4' })
                ])
            ])));
        }
        
        // About Section Component
        function AboutSection() {
            return h('section', {
                id: 'about',
                className: 'py-20 px-4'
            }, h('div', {
                className: 'container mx-auto max-w-6xl'
            }, h('div', {
                className: 'glassmorphism rounded-3xl p-8 md:p-12 hover-lift'
            }, [
                h('h2', {
                    key: 'title',
                    className: 'text-4xl font-poppins font-bold mb-8 text-center bg-gradient-to-r bg-clip-text text-transparent'
                }, 'About Me'),
                h('div', {
                    key: 'content',
                    className: 'prose prose-invert max-w-none'
                }, [
                    h('p', {
                        key: 'p1',
                        className: 'text-lg leading-relaxed mb-6 text-gray-300'
                    }, "Hello 👋 I'm Prasath Murugesan. I was born and grew up in India. I have two master's degrees, one in Data Science (integrated master's) from PSG College of Technology, Coimbatore and another in Data Analytics (Big Data Systems) from Pennsylvania State University."),
                    h('p', {
                        key: 'p2',
                        className: 'text-lg leading-relaxed mb-6 text-gray-300'
                    }, "I am a consultant for product teams that seek to build and integrate AI solutions into their roadmaps and enable stakeholders - helping to move from prototype to production. I have gathered experience in solving problems from various domains ranging from FinTech, AdTech, Job market, Media & Social Content, Software Development, Elections and looking to expand further."),
                    h('div', {
                        key: 'interests',
                        className: 'glassmorphism rounded-2xl p-6 mb-6'
                    }, [
                        h('h3', {
                            key: 'interests-title',
                            className: 'text-xl font-poppins font-semibold mb-4 text-primary'
                        }, 'Areas of Interest'),
                        h('p', {
                            key: 'interests-content',
                            className: 'text-gray-300 leading-relaxed'
                        }, 'Applied ML, Data Engineering & Analytics, Deep Learning, Natural Language Processing, Computer Vision, LLMs, Generative AI, Graph models & Knowledge graphs, Learning with limited data.')
                    ]),
                    h('p', {
                        key: 'p3',
                        className: 'text-lg leading-relaxed mb-6 text-gray-300'
                    }, 'Apart from tech and consulting, my hobbies span Tamil Sangam literature, Ethics in Tech, Open-Source community, Math, Economics, Politics, Cinema and Cricket. I am a big fan of the works of AR Rahman and Mani Selvag.'),
                    h('p', {
                        key: 'p4',
                        className: 'text-lg leading-relaxed mb-8 text-gray-300'
                    }, 'I am currently teaching myself to design cloud solutions and full-stack web development. Trying to be a generalist in a specialized world 😊'),
                    h('div', {
                        key: 'quote',
                        className: 'glassmorphism rounded-2xl p-6 text-center'
                    }, [
                        h('p', { key: 'q1', className: 'font-jetbrains text-lg text-primary mb-2' }, 'உளமது தாழா உடம்பது அஞ்சேல்.'),
                        h('p', { key: 'q2', className: 'font-jetbrains text-lg text-primary mb-2' }, 'நிலையது கேண்மை துணைவழு துணிந்து.'),
                        h('p', { key: 'q3', className: 'font-jetbrains text-lg text-primary mb-2' }, 'மலையது போல்வன பலனே ந்தென்'),
                        h('p', { key: 'q4', className: 'font-jetbrains text-lg text-primary mb-2' }, 'தளைகடவு ம் ஏற்பன கிடபு கணிகை.'),
                        h('p', { key: 'author', className: 'font-jetbrains text-sm text-gray-400' }, '- நக்கீரனார் (குறிஞ்சிப்பாட்டு)')
                    ])
                ])
            ])));
        }
        
        // Experience Section Component
        function ExperienceSection() {
            const experiences = [
                {
                    title: "Product Intern, MiQ Digital USA Inc.",
                    period: " Jun 2024 - July 2024",
                    description: "Used python programming with OpenAI and Pinecone, built a query construction for GTM strategy. Automated Programmatic & Social DSP data integration pipelines to support data-backed pitching and continuous channel evaluation. Performed analytics on salesforce reports and presented the insights to the commercial sales strategy team with an interactive and actionable customer segmentation dashboard."
                },
                {
                    title: "AI/ML Consultant, AMIGOS Software",
                    period: " Nov 2024 - Sept 2024",
                    description: "Added the elderlyedibility.care product design with AI first principle, built prototypes and enable software teams to scale prototypes. Designed workflow for ranking and matching care recipients and caregivers, and demonstrated activity suggestions for different care recipients based on their personas meets Alzheimer's, Dementia etc using RAG based pipelines."
                },
                {
                    title: "Research Assistant, The Pennsylvania State University",
                    period: " Sept 2023 - Apr 2024",
                    description: "Developed a RAG-based teaching assistant chatbot in ensuring faculties in providing timely and relevant information into the courses."
                },
                {
                    title: "Machine Learning Engineer Intern, Grow.com",
                    period: " Jun 2022 - Jun 2023",
                    description: "Designed and developed an ML system for extracting invoice information that helps to expedite the bulk invoice to cash flow process and increase the productivity of collection agents by 60%. Extracted and integrated table contents using computer vision models, transfer learning and fine tuning QA language models, visual question answering transformer model (DONUT) and prompt engineering for GPT models."
                },
                {
                    title: "AI Research Intern, AI Institute At University Of South Carolina",
                    period: " May 2021 - Nov 2021",
                    description: "Conducted research to generalize language agent actions in TestWorld Commonsense upgrading the existing AI's abilities to be robust to new environments and resources by R1 using Natural Language Processing and Understanding Framework."
                }
            ];
            
            return h('section', {
                id: 'experience',
                className: 'py-20 px-4'
            }, h('div', {
                className: 'container mx-auto max-w-6xl'
            }, [
                h('h2', {
                    key: 'title',
                    className: 'text-4xl font-poppins font-bold mb-12 text-center bg-gradient-to-r bg-clip-text text-transparent'
                }, 'Experience'),
                h('div', {
                    key: 'timeline',
                    className: 'relative'
                }, [
                    h('div', {
                        key: 'line',
                        className: 'timeline-line'
                    }),
                    h('div', {
                        key: 'experiences',
                        className: 'space-y-8'
                    }, experiences.map((exp, index) => 
                        h('div', {
                            key: index,
                            className: 'timeline-content hover-lift'
                        }, [
                            h('div', {
                                key: 'dot',
                                className: \`timeline-dot animate-glow \${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}\`
                            }),
                            h('div', {
                                key: 'content',
                                className: 'glassmorphism rounded-2xl p-6'
                            }, [
                                h('div', {
                                    key: 'header',
                                    className: 'flex flex-col md:flex-row md:items-center md:justify-between mb-4'
                                }, [
                                    h('h3', {
                                        key: 'title',
                                        className: 'text-xl font-poppins font-semibold text-primary'
                                    }, exp.title),
                                    h('span', {
                                        key: 'period',
                                        className: 'text-sm text-gray-400 font-jetbrains'
                                    }, exp.period)
                                ]),
                                h('p', {
                                    key: 'desc',
                                    className: 'text-gray-300 leading-relaxed'
                                }, exp.description)
                            ])
                        ])
                    ))
                ])
            ]));
        }
        
        // Education Section Component
        function EducationSection() {
            const educations = [
                {
                    institution: "The Pennsylvania State University, PA, USA",
                    degree: "Master's in Data Analytics, Big Data Systems",
                    period: " 2023-2024",
                    description: "I call this chapter பெரிய அடி (Big Step/Big Blow) - polyemouse. Recipient of Chancellor's Scholarship & Warren V. Musser Scholarship."
                },
                {
                    institution: "PSG College Of Technology, Coimbatore, India.",
                    degree: "Master's in Data Science (M.Sc Integrated)",
                    period: " 2018-2023",
                    description: "During this time, I was fortunate to meet mentors who shaped my perspectives on what a fruitful career is. I am grateful to Dr. R. Nadarajan and Shamshu Dhanvez anna for guiding me since then."
                },
                {
                    institution: "Jawahar Higher Secondary School (CBSE), Neyveli, India.",
                    degree: "Higher Secondary Education",
                    period: "2012-2018",
                    description: "I am grateful for the friendships that still continue to this day. To my parents, Sridhar, Sudarsan & Aswin."
                }
            ];
            
            return h('section', {
                id: 'education',
                className: 'py-20 px-4'
            }, h('div', {
                className: 'container mx-auto max-w-6xl'
            }, [
                h('h2', {
                    key: 'title',
                    className: 'text-4xl font-poppins font-bold mb-12 text-center bg-gradient-to-r bg-clip-text text-transparent'
                }, 'Education'),
                h('div', {
                    key: 'education-list',
                    className: 'space-y-8'
                }, educations.map((edu, index) =>
                    h('div', {
                        key: index,
                        className: 'glassmorphism rounded-2xl p-8 hover-lift'
                    }, [
                        h('div', {
                            key: 'header',
                            className: 'flex flex-col md:flex-row md:items-center md:justify-between mb-4'
                        }, [
                            h('div', { key: 'info' }, [
                                h('h3', {
                                    key: 'institution',
                                    className: 'text-2xl font-poppins font-semibold text-primary mb-2'
                                }, edu.institution),
                                h('p', {
                                    key: 'degree',
                                    className: 'text-lg text-secondary font-medium'
                                }, edu.degree)
                            ]),
                            h('span', {
                                key: 'period',
                                className: 'text-sm text-gray-400 font-jetbrains px-4 py-2 rounded-full',
                                style: { backgroundColor: 'hsla(240, 10%, 7%, 0.5)' }
                            }, edu.period)
                        ]),
                        h('p', {
                            key: 'desc',
                            className: 'text-gray-300 leading-relaxed'
                        }, edu.description)
                    ])
                ))
            ]));
        }
        
        // Projects Section Component
        function ProjectsSection() {
            const projects = [
                {
                    title: "News Recommendation System At Scale",
                    description: "A news recommendation system built using Microsoft News Dataset, considering 250k users and 174M click events. It uses Collaborative Filtering based approach. The system recommends articles based on user preferences and enables rank-ordered recommendation queries personalized to each user.",
                    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300"
                },
                {
                    title: "Music Meta Brain",
                    description: "A contextual information retrieval system which leverages knowledge graph built in an unsupervised setting which helps to extract relevant and similar documents to the queries generated.",
                    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300"
                },
                {
                    title: "Sentiment Detection Web App",
                    description: "It is an end-to-end interactive web app used to predict and visualize probability distribution of emotions using authentic/fake logistic regression model for sentiment.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300"
                },
                {
                    title: "Balancing The Imbalanced",
                    description: "Resolved the imbalance in credit card fraud detection dataset which is highly imbalanced containing 0.05% of fraud transactions. Built a Random Forest model to construct a comparison flow that to reduce the number of false positives and leads to better precision and recall measures.",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300"
                },
                {
                    title: "Time Series Analysis On Beverage Drink Consumption",
                    description: "Analyzed the trend in beer consumption of Australians during 2006 - 2018 using R. Tried to find seasonal, trend decomposition and smoothing and trend methods. The beer sales were increasing annually with a seasonal decrease in mid-quarters every year.",
                    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300"
                }
            ];
            
            return h('section', {
                id: 'projects',
                className: 'py-20 px-4'
            }, h('div', {
                className: 'container mx-auto max-w-7xl'
            }, [
                h('h2', {
                    key: 'title',
                    className: 'text-4xl font-poppins font-bold mb-12 text-center bg-gradient-to-r bg-clip-text text-transparent'
                }, 'Projects'),
                h('div', {
                    key: 'projects-grid',
                    className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                }, projects.map((project, index) =>
                    h('div', {
                        key: index,
                        className: 'glassmorphism rounded-2xl p-6 hover-lift group'
                    }, [
                        h('div', {
                            key: 'image',
                            className: 'mb-6'
                        }, h('img', {
                            src: project.image,
                            alt: project.title,
                            className: 'w-full h-48 object-cover rounded-xl',
                            style: { height: '12rem' }
                        })),
                        h('h3', {
                            key: 'title',
                            className: 'text-xl font-poppins font-semibold text-primary mb-3'
                        }, project.title),
                        h('p', {
                            key: 'desc',
                            className: 'text-gray-300 text-sm leading-relaxed mb-4'
                        }, project.description),
                        h('button', {
                            key: 'btn',
                            className: 'bg-gradient-to-r px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform'
                        }, 'View Project')
                    ])
                ))
            ]));
        }
        
        // Main Portfolio Component
        function Portfolio() {
            useEffect(() => {
                // Add scroll animations
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('opacity-100', 'translate-y-0');
                            entry.target.classList.remove('opacity-0', 'translate-y-8');
                        }
                    });
                }, observerOptions);
                
                // Observe all sections for scroll animations
                const sections = document.querySelectorAll('section:not(#hero)');
                sections.forEach(section => {
                    section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
                    observer.observe(section);
                });
                
                // Add parallax effect to geometric background
                const handleScroll = () => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -0.5;
                    const geometricBg = document.querySelector('.geometric-bg');
                    if (geometricBg) {
                        geometricBg.style.transform = \`translateY(\${rate}px)\`;
                    }
                };
                
                window.addEventListener('scroll', handleScroll);
                
                return () => {
                    window.removeEventListener('scroll', handleScroll);
                    observer.disconnect();
                };
            }, []);
            
            return h('div', {
                className: 'min-h-screen bg-gradient-to-br text-white'
            }, [
                h(GeometricBackground, { key: 'bg' }),
                h(Navigation, { key: 'nav' }),
                h(HeroSection, { key: 'hero' }),
                h(AboutSection, { key: 'about' }),
                h(ExperienceSection, { key: 'experience' }),
                h(EducationSection, { key: 'education' }),
                h(ProjectsSection, { key: 'projects' }),
                h('footer', {
                    key: 'footer',
                    className: 'py-12 px-4 border-t border-white/10'
                }, h('div', {
                    className: 'container mx-auto max-w-6xl text-center'
                }, h('div', {
                    className: 'glassmorphism rounded-2xl p-8'
                }, [
                    h('p', {
                        key: 'copyright',
                        className: 'text-gray-400 mb-4'
                    }, '© 2025 Prasath Murugesan'),
                    h('p', {
                        key: 'tech',
                        className: 'text-sm text-gray-500'
                    }, 'Last updated on 15 July, 2025')
                ])))
            ]);
        }
        
        // Render the app
        const root = createRoot(document.getElementById('root'));
        root.render(h(Portfolio));
    </script>
</body>
</html>`;

fs.writeFileSync("index.html", staticHTML);
console.log("Static HTML file created successfully!");
