
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactForm from './ContactForm'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div 
      ref={ref}
      className="bg-neutral-950 text-white px-6 py-12 flex flex-col items-center text-center gap-8"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div 
        className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Group CrossFit Sessions
      </motion.div>

      <motion.h2 
        className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi! We’re a local CrossFit gym in Denver, Colorado.
      </motion.h2>

      <motion.p 
        className="text-base sm:text-lg max-w-2xl"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        CrossFit Gym was started by Alex and Sparky in 2012. It’s our mission to help people in Denver get fit, stay healthy, and live life on their terms without fitness being an obstacle.
      </motion.p>

      <motion.div 
        className="w-full max-w-6xl mt-10"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  )
}

export default About
