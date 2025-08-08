import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    { name: 'React/TypeScript', level: 95 },
    { name: 'AI/ML Integration', level: 90 },
    { name: 'Voice Acting', level: 88 },
    { name: 'Content Creation', level: 92 },
    { name: 'Multilingual Communication', level: 96 }
  ];

  return (
    <section id="about" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">About Me</h2>
          
          <div className="glass-effect p-8 rounded-2xl mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate creative technologist with over 7 years of experience in 
              AI content development, voice acting, and digital innovation. My unique blend 
              of technical expertise and creative storytelling helps businesses connect 
              with global audiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fluent in Thai, English, and Japanese, I specialize in creating multilingual 
              content solutions that break down communication barriers and foster meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-purple-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: index * 0.1 + 0.5 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
