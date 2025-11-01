
import React from 'react'
import gym1 from '../assets/gym1.jpeg'
import gym2 from '../assets/gym2.jpeg'
import gym3 from '../assets/gym3.jpeg'
import gym4 from '../assets/gym4.jpg'
import { motion } from 'framer-motion'

const images = [gym1, gym2, gym3, gym4]
const captions = [
  "CrossFit Group Classes",
  "Strength Training",
  "Personal Training",
  "Member Only Events"
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const Offer = () => {
  return (
    <div className='min-h-screen flex flex-col bg-neutral-950 text-white font-extrabold text-center items-center'>
      
      <motion.h1
        className='text-4xl m-20 sm:text-5xl md:m-30'
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        We offer something for <br className='hidden md:block' /> everybody
      </motion.h1>

      <div className="grid w-full justify-center gap-4 px-10 grid-cols-[repeat(auto-fit,_minmax(200px,_2fr))]">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative w-full h-[250px] rounded-lg overflow-hidden bg-blend-overlay bg-[#384638]/80 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/40">
              <p className="text-white text-2xl md:text-3xl sm:text-3xl font-bold drop-shadow">
                {captions[idx]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Offer
