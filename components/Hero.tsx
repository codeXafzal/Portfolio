'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Typing animation state
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Hi, I'm Afzal Khan";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('models');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black z-10" />

        {/* Video background */}
        <div className="relative w-full h-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dfvjs67ex/video/upload/v1770284231/call-of-duty-black-ops-3-moewalls-com_jk2len.mp4"
              type="video/mp4"
            />
          </video>

          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 max-w-7xl mx-auto"
      >
        <div className="mb-8 sm:mb-10 md:mb-12">
          {/* Main heading with typing animation */}
          <div className="relative overflow-hidden">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-bold text-white leading-tight tracking-tight">
              {displayText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-all duration-300 cursor-default"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="inline-block w-0.5 sm:w-1 md:w-1.5 h-[0.85em] bg-gradient-to-b from-blue-500 to-purple-500 ml-1 sm:ml-2 align-middle rounded-sm"
                />
              )}
            </h1>
            
            {/* Animated underline */}
            
          </div>
        </div>

        {/* Role descriptions with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-onest text-gray-300 max-w-3xl mb-10 sm:mb-12 md:mb-14 tracking-wide flex flex-wrap items-center gap-2 sm:gap-3"
        >
          {['AI/ML Developer', 'WEB 3 Enthusiast', 'Software Engineer'].map((role, index) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + (index * 0.2), duration: 0.6 }}
              className="flex items-center group"
            >
              <motion.span
                whileHover={{ 
                  scale: 1.05,
                  color: '#60a5fa',
                }}
                transition={{ duration: 0.2 }}
                className="cursor-default relative"
              >
                {role}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              {index < 2 && (
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-gray-600 mx-2 sm:mx-3 text-lg sm:text-xl md:text-2xl"
                >
                  •
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons with advanced micro-interactions */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-5"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-onest font-semibold text-sm sm:text-base md:text-lg text-white overflow-hidden rounded-xl w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              View Projects 
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                className="relative w-4 h-4 sm:w-5 sm:h-5"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <motion.path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileHover={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </span>
            
            {/* Glass morphism background */}
            <div className="absolute inset-0 border-2 border-white/20 backdrop-blur-md bg-white/5 rounded-xl transition-all duration-500 group-hover:border-blue-400/50 group-hover:bg-blue-500/10 group-hover:shadow-2xl group-hover:shadow-blue-500/30" />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(110deg, transparent 25%, rgba(59, 130, 246, 0.4) 50%, transparent 75%)',
              }}
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Particle effect on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 hidden sm:block"
              transition={{ duration: 0.3 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  initial={{ x: '50%', y: '50%', opacity: 0 }}
                  whileHover={{
                    x: `${50 + Math.cos(i * 60) * 40}%`,
                    y: `${50 + Math.sin(i * 60) * 40}%`,
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              ))}
            </motion.div>
          </motion.button>

          <motion.button
            onClick={downloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-onest font-semibold text-sm sm:text-base md:text-lg text-white overflow-hidden rounded-xl w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                className="w-4 h-4 sm:w-5 sm:h-5"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.path
                  d="M10 3V13M10 13L6 9M10 13L14 9M3 17H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
              View Resume
            </span>
            
            {/* Glass morphism background */}
            <div className="absolute inset-0 border-2 border-white/20 backdrop-blur-md bg-white/5 rounded-xl transition-all duration-500 group-hover:border-purple-400/50 group-hover:bg-purple-500/10 group-hover:shadow-2xl group-hover:shadow-purple-500/30" />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(110deg, transparent 25%, rgba(168, 85, 247, 0.4) 50%, transparent 75%)',
              }}
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
          </motion.button>
        </motion.div>
              
        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
         className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"

        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.2 }}
            className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-white/70 transition-all duration-300 backdrop-blur-sm bg-white/5"
            onClick={scrollToProjects}
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-[10px] sm:text-xs mt-2 font-onest tracking-wider hidden sm:block"
          >
            SCROLL
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}