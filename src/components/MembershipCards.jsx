
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import Button from './Button'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      duration: 0.8,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const MembershipCards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className='flex flex-col items-center min-h-screen bg-[#5f7252] text-white px-4 py-10'>
      <h4 className='border-2 border-white rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl mb-6'>
        Membership
      </h4>
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mb-12'>
        Crushing your health and fitness goals starts here...
      </h2>

 
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'
      >
        {[...Array(3)].map((_, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className='bg-white text-black text-center rounded-2xl shadow-lg p-8 flex flex-col justify-between'
          >
            <div>
              <h3 className='font-bold text-3xl md:text-4xl mb-6'>Month to <br /> Month</h3>
              <h3>
                <strong className='text-[#5f7252] font-extrabold text-4xl'>$165</strong>/mo
              </h3>
              <ul className='mt-6 space-y-2 text-lg text-left pl-6'>
                <li><FontAwesomeIcon icon={faCircleCheck} className='text-[#5f7252] mr-2' /> All classes</li>
                <li><FontAwesomeIcon icon={faCircleCheck} className='text-[#5f7252] mr-2' /> All member events</li>
                <li><FontAwesomeIcon icon={faCircleCheck} className='text-[#5f7252] mr-2' /> Full gym access</li>
              </ul>
              <p className='text-gray-500 text-base mt-6'>Charges every month unless you cancel</p>
            </div>
            <div className='mt-8'>
              <Button
                content="Start 7 day free trial"
                bgColor="black"
                hoverColor="black"
                textColor="#ffffff"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <Reviews /> */}

    </div>
  )
}

export default MembershipCards
