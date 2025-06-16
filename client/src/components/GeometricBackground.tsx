export default function GeometricBackground() {
  return (
    <div className="geometric-bg fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
      <svg className="w-full h-full opacity-40" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(278, 100%, 50%)', stopOpacity: 0.8}} />
            <stop offset="50%" style={{stopColor: 'hsl(285, 100%, 65%)', stopOpacity: 0.4}} />
            <stop offset="100%" style={{stopColor: 'hsl(278, 100%, 50%)', stopOpacity: 0.8}} />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(285, 100%, 65%)', stopOpacity: 0.6}} />
            <stop offset="50%" style={{stopColor: 'hsl(278, 100%, 50%)', stopOpacity: 0.3}} />
            <stop offset="100%" style={{stopColor: 'hsl(285, 100%, 65%)', stopOpacity: 0.6}} />
          </linearGradient>
          <filter id="waveGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Geometric Wave Lines - Layer 1 */}
        <path d="M0,100 Q240,50 480,150 T960,100 Q1200,50 1440,150 T1920,100" 
              stroke="url(#waveGrad1)" strokeWidth="3" fill="none" filter="url(#waveGlow)">
          <animate attributeName="d" dur="12s" repeatCount="indefinite" 
              values="M0,100 Q240,50 480,150 T960,100 Q1200,50 1440,150 T1920,100;
                      M0,150 Q240,100 480,50 T960,150 Q1200,100 1440,50 T1920,150;
                      M0,100 Q240,50 480,150 T960,100 Q1200,50 1440,150 T1920,100"/>
        </path>
        
        {/* Geometric Wave Lines - Layer 2 */}
        <path d="M0,250 Q320,200 640,300 T1280,250 Q1600,200 1920,300" 
              stroke="url(#waveGrad2)" strokeWidth="4" fill="none" filter="url(#waveGlow)" opacity="1">
          <animate attributeName="d" dur="16s" repeatCount="indefinite" 
              values="M0,250 Q320,200 640,300 T1280,250 Q1600,200 1920,300;
                      M0,300 Q320,250 640,200 T1280,300 Q1600,250 1920,200;
                      M0,250 Q320,200 640,300 T1280,250 Q1600,200 1920,300"/>
        </path>
        
        {/* Geometric Wave Lines - Layer 3 */}
        <path d="M0,450 Q480,350 960,550 T1920,450" 
              stroke="url(#waveGrad1)" strokeWidth="1.5" fill="none" filter="url(#waveGlow)" opacity="0.6">
          <animate attributeName="d" dur="20s" repeatCount="indefinite" 
              values="M0,450 Q480,350 960,550 T1920,450;
                      M0,550 Q480,450 960,350 T1920,550;
                      M0,450 Q480,350 960,550 T1920,450"/>
        </path>
        
        {/* Geometric Wave Lines - Layer 4 */}
        <path d="M0,700 Q360,600 720,800 T1440,700 Q1680,600 1920,800" 
              stroke="url(#waveGrad2)" strokeWidth="1" fill="none" filter="url(#waveGlow)" opacity="0.4">
          <animate attributeName="d" dur="18s" repeatCount="indefinite" 
              values="M0,700 Q360,600 720,800 T1440,700 Q1680,600 1920,800;
                      M0,800 Q360,700 720,600 T1440,800 Q1680,700 1920,600;
                      M0,700 Q360,600 720,800 T1440,700 Q1680,600 1920,800"/>
        </path>
        
        {/* Geometric Wave Lines - Layer 5 */}
        <path d="M0,900 Q240,850 480,950 T960,900 Q1200,850 1440,950 T1920,900" 
              stroke="url(#waveGrad1)" strokeWidth="0.8" fill="none" filter="url(#waveGlow)" opacity="0.3">
          <animate attributeName="d" dur="14s" repeatCount="indefinite" 
              values="M0,900 Q240,850 480,950 T960,900 Q1200,850 1440,950 T1920,900;
                      M0,950 Q240,900 480,850 T960,950 Q1200,900 1440,850 T1920,950;
                      M0,900 Q240,850 480,950 T960,900 Q1200,850 1440,950 T1920,900"/>
        </path>
        
        {/* Floating Geometric Nodes */}
        <g opacity="0.8">
          <circle cx="200" cy="300" r="6" fill="hsl(278, 100%, 50%)" filter="url(#waveGlow)">
            <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="300;350;300"/>
            <animate attributeName="r" dur="4s" repeatCount="indefinite" values="6;8;6"/>
          </circle>
          <circle cx="800" cy="200" r="8" fill="hsl(285, 100%, 65%)" filter="url(#waveGlow)">
            <animate attributeName="cy" dur="10s" repeatCount="indefinite" values="200;250;200"/>
            <animate attributeName="r" dur="5s" repeatCount="indefinite" values="8;10;8"/>
          </circle>
          <circle cx="1400" cy="500" r="7" fill="hsl(278, 100%, 50%)" filter="url(#waveGlow)">
            <animate attributeName="cy" dur="12s" repeatCount="indefinite" values="500;450;500"/>
            <animate attributeName="r" dur="6s" repeatCount="indefinite" values="7;9;7"/>
          </circle>
          <circle cx="600" cy="700" r="5" fill="hsl(285, 100%, 65%)" filter="url(#waveGlow)">
            <animate attributeName="cy" dur="9s" repeatCount="indefinite" values="700;750;700"/>
            <animate attributeName="r" dur="3s" repeatCount="indefinite" values="5;7;5"/>
          </circle>
          
          {/* Additional visible geometric shapes */}
          <polygon points="1600,800 1620,820 1600,840 1580,820" fill="hsl(278, 100%, 50%)" opacity="0.6" filter="url(#waveGlow)">
            <animateTransform attributeName="transform" type="rotate" dur="8s" repeatCount="indefinite" values="0 1600 820;360 1600 820"/>
          </polygon>
          <polygon points="300,600 320,580 340,600 320,620" fill="hsl(285, 100%, 65%)" opacity="0.7" filter="url(#waveGlow)">
            <animateTransform attributeName="transform" type="rotate" dur="6s" repeatCount="indefinite" values="0 320 600;-360 320 600"/>
          </polygon>
        </g>
        
        {/* Connecting Lines */}
        <g opacity="0.6">
          <line x1="200" y1="300" x2="800" y2="200" stroke="hsl(278, 100%, 50%)" strokeWidth="2" filter="url(#waveGlow)">
            <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="0.6;1;0.6"/>
            <animate attributeName="strokeWidth" dur="4s" repeatCount="indefinite" values="2;3;2"/>
          </line>
          <line x1="800" y1="200" x2="1400" y2="500" stroke="hsl(285, 100%, 65%)" strokeWidth="2" filter="url(#waveGlow)">
            <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0.6;1;0.6"/>
            <animate attributeName="strokeWidth" dur="5s" repeatCount="indefinite" values="2;4;2"/>
          </line>
          <line x1="300" y1="600" x2="1600" y2="800" stroke="hsl(278, 100%, 50%)" strokeWidth="1.5" filter="url(#waveGlow)">
            <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0.6;0.9;0.6"/>
          </line>
        </g>
      </svg>
    </div>
  );
}
