'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Code, TrendingUp, Boxes } from 'lucide-react'

const skills = [
  {
    category: 'Programming Languages ',
    icon: Code,
    items: [
      'C',
      'C++',
      'C#',
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'Solidity',
      'SQL',
      
      
    ],
    color: 'cyber-blue',
  },
  {
    category: 'Data Structures & Algorithms',
    icon: Code,
    items: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'Problem Solving',
      'Debugging',
      'Competitive Programming',
    ],
    color: 'cyber-blue',
  },
  {
    category: 'AI / Machine Learning',
    icon: Brain,
    items: [
      'Neural Networks',
      'Deep Learning',
      'Reinforcement Learning',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Keras',
    ],
    color: 'cyber-purple',
  },
  {
    category: 'MLOps',
    icon: TrendingUp,
    items: [
      'Model Deployment',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Monitoring',
      'Cloud Integration'
    ],
    color: 'cyber-green',
  },
  {
    category: 'Blockchain & Web3',
    icon: Boxes,
    items: [
      'Smart Contracts',
      'Solidity',
      'Ethereum',
      'Web3.js',
      'Decentralized Apps (dApps)',
      'Token Standards (ERC-20, ERC-721)'
    ],
    color: 'cyber-pink',
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Parallax background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-10 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-10 w-80 h-80 bg-cyber-purple/10 rounded-full blur-3xl"
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-cyber-blue text-sm font-mono mb-6">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-white">Skills & </span>
            <span className="neon-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent AI solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <TiltCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function TiltCard({ skill, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -(y - centerY) / 20
    const rotateY = (x - centerX) / 20

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="p-6 bg-cyber-dark/50 backdrop-blur-xl border border-cyber-blue/20 rounded-2xl transition-transform duration-300 ease-out will-change-transform"
      >
        <div className="mb-4">
          <skill.icon className="w-8 h-8 text-cyber-blue" />
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-4">
          {skill.category}
        </h3>

        <div className="space-y-2">
          {skill.items.map((item: string) => (
            <div
              key={item}
              className="flex items-center gap-2 text-gray-300 font-mono text-sm"
            >
              <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
