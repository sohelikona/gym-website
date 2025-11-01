
// import React from 'react';
// import { motion } from 'framer-motion';
// import hero1 from "../assets/hero1.jpeg";
// import Navbar from './Navbar';
// import Button from './Button';
// import Rating from './Rating';
// import man from "../assets/man.jpeg";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 }
// };

// const Hero = () => {
//   return (
//     <div
//       className="relative h-screen bg-cover bg-center flex flex-col justify-center text-center items-center"
//       style={{ backgroundImage: `url(${hero1})` }}
//     >
//       <div className="absolute inset-0 bg-black/80 z-0"></div>

//       <div className="relative z-10 mt-20 w-full">
//         <Navbar />
//         <motion.div
//           // className="p-10 text-white max-w-4xl h-screen flex flex-col justify-center text-center items-center sm:text-center md:text-center m-0"
//             className="p-10 text-white max-w-4xl w-full h-full flex flex-col justify-center items-center text-center mx-auto"
//           initial="hidden"
//           animate="visible"
//           transition={{ staggerChildren: 0.2 }}
//         >
//           <motion.h1
//             className="text-3xl font-bold mb-4 sm:text-6xl mt-40 sm:mt-20"
//             variants={fadeInUp}
//             transition={{ duration: 0.6 }}
//           >
//             Hit your fitness targets faster than ever
//           </motion.h1>

//           <motion.h4
//             className="text-lg mb-6 max-w-2xl"
//             variants={fadeInUp}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Whether you're aiming to build muscle, lose weight, or stay active – our expert coaches have your back every step of the way.
//           </motion.h4>

//           <motion.div
//             className="mb-15"
//             variants={fadeInUp}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Button content="Start your 7-day free trial" bgColor="#96fb57" hoverColor="#85e84d" />
//           </motion.div>

//           <motion.div
//             variants={fadeInUp}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             <Rating />
//           </motion.div>

//           <motion.div
//             className="flex justify-center items-center text-center mt-6"
//             variants={fadeInUp}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             <img src={man} className="rounded-full w-15 h-15 aspect-square object-cover mr-5" />
//             <p className="max-w-96">
//               “In just 6 months, I dropped 15 pounds and feel stronger than ever.”
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React from 'react';
import { motion } from 'framer-motion';
import hero1 from "../assets/hero1.jpeg";
import Navbar from './Navbar';
import Button from './Button';
import Rating from './Rating';
import man from "../assets/man.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Navbar outside hero content */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center text-center px-4 py-24 sm:py-32 min-h-screen">
        <motion.div
          className="text-white max-w-4xl mx-auto flex flex-col items-center"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl font-bold mb-4"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Hit your fitness targets faster than ever
          </motion.h1>

          <motion.h4
            className="text-base sm:text-lg mb-6 max-w-2xl"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're aiming to build muscle, lose weight, or stay active – our expert coaches have your back every step of the way.
          </motion.h4>

          <motion.div
            className="mb-6"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button content="Start your 7-day free trial" bgColor="#96fb57" hoverColor="#85e84d" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Rating />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-4 sm:gap-6"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <img src={man} className="rounded-full w-20 h-20 object-cover" />
            <p className="max-w-xs text-sm sm:text-base text-white">
              “In just 6 months, I dropped 15 pounds and feel stronger than ever.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
