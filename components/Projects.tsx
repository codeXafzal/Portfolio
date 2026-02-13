'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: '001',
    title: 'DEEP LEARNING',
    subtitle: 'Computer Vision Model',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800',
    description: 'Advanced CNN architecture for image classification',
  },
  {
    id: '002',
    title: 'NLP TRANSFORMER',
    subtitle: 'Natural Language Processing',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    description: 'State-of-the-art language understanding model',
  },
  {
    id: '003',
    title: 'REINFORCEMENT AI',
    subtitle: 'Autonomous Systems',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
    description: 'Intelligent agent training and optimization',
  },
  {
    id: '004',
    title: 'NEURAL NETWORKS',
    subtitle: 'Predictive Analytics',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    description: 'Advanced forecasting and pattern recognition',
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="models" ref={containerRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wider mb-4">
           Building Scalable Technology for Tomorrow
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            Creating intelligent, secure, and high-performance systems across AI, Web, and Blockchain.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <motion.div
            className="flex space-x-6 pb-8"
            style={{ width: 'max-content' }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <FeaturedCard
            title="OLLAMA CODE EXPLAINER"
            subtitle="It is a code explainer model built using Ollama and fine-tuned on a custom dataset of code snippets and explanations. It can understand and explain code in multiple programming languages, making it a versatile tool for developers."
            image="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200"
            github="https://github.com/codeXafzal/ollama-code-explainer"
          />
          <FeaturedCard
            title="AI CONTENT MODERATION SYSTEM"
            subtitle="A research paper on 'AI Content Moderation System' that explores the design and implementation of an AI-driven content moderation system. The paper discusses the challenges of moderating user-generated content and presents a novel approach using machine learning algorithms to effectively identify and filter inappropriate content."
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"
            github="https://github.com/codeXafzal/AI-Content-Moderation-System"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative w-80 h-96 flex-shrink-0 group cursor-pointer overflow-hidden rounded-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-6xl font-bebas text-white mb-2">{project.id}</div>
        <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.subtitle}</p>
      </div>

      <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function FeaturedCard({ title, subtitle, image ,github }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="relative h-96 overflow-hidden rounded-lg group cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="text-sm text-gray-300 mb-2 tracking-wider">{subtitle}</div>
        <h3 className="text-3xl md:text-4xl font-bebas text-white mb-4 tracking-wide">{title}</h3>
      <motion.a
  href={github}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
  whileTap={{ scale: 0.95 }}
  className="inline-block px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
>
  VIEW PROJECT
</motion.a>

      </div>
    </motion.div>
  );
}
