'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Code, Database, Cpu, TrendingUp, Boxes } from 'lucide-react'

const skills = [
  {
    category: 'Programming & DSA',
    icon: Code,
    items: [
      'Java',
      'Python',
      'JavaScript',
      'Data Structures',
      'Algorithms',
      'OOP',
      'Problem Solving'
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
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative card-hover"
            >
              <div className="relative p-6 bg-cyber-dark/50 backdrop-blur-xl border border-cyber-blue/20 rounded-2xl overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-${skill.color}/10 rounded-xl mb-4 group-hover:bg-${skill.color}/20 transition-colors`}>
                    <skill.icon className={`w-8 h-8 text-${skill.color}`} />
                  </div>

                  {/* Category */}
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {skill.category}
                  </h3>

                  {/* Skills list */}
                  <div className="space-y-2">
                    {skill.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-300 font-mono text-sm"
                      >
                        <div className={`w-1.5 h-1.5 bg-${skill.color} rounded-full`} />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-6 h-1 bg-cyber-dark/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/50`}
                    />
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-${skill.color}/20 to-transparent rounded-bl-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies', value: '30+' },
            { label: 'Certifications', value: '12+' },
            { label: 'Research Papers', value: '8' },
            { label: 'Open Source', value: '25+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-cyber-dark/30 backdrop-blur-xl border border-cyber-blue/20 rounded-2xl text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-cyber-blue mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-mono text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
