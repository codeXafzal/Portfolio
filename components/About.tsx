

'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/codeXafzal', label: 'GitHub', color: 'cyber-blue' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/afzal-khan1215', label: 'LinkedIn', color: 'cyber-purple' },
  { icon: Mail, href: 'mailto:afzalkhan1215@gmail.com', label: 'Email', color: 'cyber-green' },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        style={{ y }}
        className="absolute top-1/4 right-10 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left side - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-6"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-display font-bold text-cyber-blue mb-4">
                Connect With Me
              </h3>
              
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group relative flex items-center gap-4 p-4 bg-cyber-dark/50 border border-cyber-blue/20 rounded-2xl hover:border-cyber-blue/50 transition-all"
                >
                  <div className={`p-3 bg-${social.color}/10 rounded-xl group-hover:bg-${social.color}/20 transition-colors`}>
                    <social.icon className={`w-6 h-6 text-${social.color}`} />
                  </div>
                  <span className="font-mono text-white group-hover:text-cyber-blue transition-colors">
                    {social.label}
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-${social.color}/0 to-${social.color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                </motion.a>
              ))}

              <motion.a
                href=""
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-2xl font-mono font-semibold mt-4"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - About content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-8 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full text-cyber-purple text-sm font-mono mb-6">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-white">Passionate About </span>
                <span className="neon-text">Innovation</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-300 font-sans text-lg leading-relaxed"
            >
             <p>
  I'm a Software Engineer specializing in AI/ML, Web Development, and Blockchain. 
  I build scalable, production-ready systems that turn complex problems into efficient solutions.
</p>
<p>
  With strong foundations in Data Structures, Algorithms, and modern frameworks, 
  I focus on writing clean code, deploying intelligent models, and developing real-world applications.
</p>
<p>
  I’m constantly learning, building, and exploring emerging technologies to stay ahead in a fast-evolving tech landscape.
</p>

            </motion.div>

          
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
