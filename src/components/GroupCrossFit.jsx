

// import React, { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// import features1 from "../assets/features1.avif"
// import feature2 from "../assets/features2.jpg"
// import features3 from "../assets/features3.avif"
// import features4 from "../assets/features4.jpg"

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// }

// const SectionWrapper = ({ children }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <motion.div
//       ref={ref}
//       variants={fadeInUp}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//     >
//       {children}
//     </motion.div>
//   )
// }

// const GroupCrossFit = () => {
//   return (
//     <>
//       {/* Section 1: Group CrossFit Sessions */}
//       <div className="h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11">
//         <SectionWrapper>
//           <div className="ml-2 sm:ml-15">
//             <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9">
//               Group CrossFit Sessions
//             </div>
//             <h2 className="text-3xl/9 sm:text-5xl md:text-6xl max-w-3xl">
//               Stay active and energized with our fun CrossFit group sessions
//             </h2>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Only 30 minutes per class
//             </div>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Includes warm-up and workout
//             </div>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Designed to be fun and motivating
//             </div>
//           </div>
//         </SectionWrapper>
//         <SectionWrapper>
//           <div className="m-10">
//             <img src={features1} className="rounded-2xl" />
//           </div>
//         </SectionWrapper>
//       </div>

//       {/* Section 2: Strength Zone */}
//       <div className="h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11">
//         <SectionWrapper>
//           <div className="hidden sm:block">
//             <img src={feature2} className="rounded-2xl" />
//           </div>
//         </SectionWrapper>
//         <SectionWrapper>
//           <div className="ml-15">
//             <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9">
//               Strength Zone
//             </div>
//             <h2 className="text-3xl/9 sm:text-5xl md:text-6xl max-w-3xl">
//               Dominate your lifting goals with elite strength gear
//             </h2>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Powerlifting and strongman area
//             </div>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Olympic platforms, bars, and plates
//             </div>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Dumbbells from 5lbs to 250lbs
//             </div>
//           </div>
//         </SectionWrapper>
//         <SectionWrapper>
//           <div className="sm:hidden m-10">
//             <img src={feature2} className="rounded-2xl" />
//           </div>
//         </SectionWrapper>
//       </div>

//       {/* Section 3: One-on-One Coaching */}
//       <div className="h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11">
//         <SectionWrapper>
//           <div className="ml-2 sm:ml-15">
//             <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9">
//               One-on-One Coaching
//             </div>
//             <h2 className="text-3xl/9 sm:text-5xl md:text-6xl max-w-3xl">
//               Train smarter with expert coaches guiding your journey
//             </h2>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Tailored weight loss plans
//             </div>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Competitive-level CrossFit training
//             </div>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Powerlifting coaching
//             </div>
//           </div>
//         </SectionWrapper>
//         <SectionWrapper>
//           <div className="m-10">
//             <img src={features3} className="rounded-2xl" />
//           </div>
//         </SectionWrapper>
//       </div>

//       {/* Section 4: Exclusive Member Events */}
//       <div className="h-screen bg-neutral-950 sm:flex sm:justify-around sm:items-center text-white leading-11">
//         <SectionWrapper>
//           <div className="hidden sm:block">
//             <img src={features4} className="rounded-2xl" />
//           </div>
//         </SectionWrapper>
//         <SectionWrapper>
//           <div className="ml-15">
//             <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit mb-9">
//               Exclusive Member Events
//             </div>
//             <h2 className="text-3xl/9 sm:text-5xl md:text-6xl max-w-3xl">
//               Build community and push limits with member-only events
//             </h2>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Friendly in-house competitions
//             </div>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Challenges every month
//             </div>
//             <div className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               Summer cookouts, games, and meetups
//             </div>
//           </div>
//         </SectionWrapper>
//         <SectionWrapper>
//           <div className="sm:hidden m-10">
//             <img src={features4} className="rounded-2xl" />
//           </div>
//         </SectionWrapper>
//       </div>
//     </>
//   )
// }

// export default GroupCrossFit



















// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
// import features1 from "../assets/features1.avif";
// import feature2 from "../assets/features2.jpg";
// import features3 from "../assets/features3.avif";
// import features4 from "../assets/features4.jpg";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// };

// const SectionWrapper = ({ children }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       variants={fadeInUp}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const Section = ({ image, title, subtitle, bullets, reverse }) => (
//   <div className={`bg-neutral-950 text-white py-16 px-4 sm:px-12 flex flex-col sm:flex-row ${reverse ? 'sm:flex-row-reverse' : ''} items-center sm:items-start gap-12`}>
//     <SectionWrapper>
//       <div className="w-full sm:w-1/2 flex justify-center">
//         <img src={image} className="rounded-2xl max-w-full h-auto object-cover" alt={title} />
//       </div>
//     </SectionWrapper>
//     <SectionWrapper>
//       <div className="w-full sm:w-1/2 space-y-6">
//         <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit">
//           {title}
//         </div>
//         <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-xl">
//           {subtitle}
//         </h2>
//         <div className="space-y-2 text-sm sm:text-base">
//           {bullets.map((b, i) => (
//             <div key={i} className="flex items-center gap-2">
//               <FontAwesomeIcon icon={faCircleCheck} className="text-green-700" />
//               {b}
//             </div>
//           ))}
//         </div>
//       </div>
//     </SectionWrapper>
//   </div>
// );


// const GroupCrossFit = () => {
//   return (
//     <>
//       <Section
//         image={features1}
//         title="Group CrossFit Sessions"
//         subtitle="Stay active and energized with our fun CrossFit group sessions"
//         bullets={[
//           "Only 30 minutes per class",
//           "Includes warm-up and workout",
//           "Designed to be fun and motivating"
//         ]}
//       />
//       <Section
//         image={feature2}
//         title="Strength Zone"
//         subtitle="Dominate your lifting goals with elite strength gear"
//         bullets={[
//           "Powerlifting and strongman area",
//           "Olympic platforms, bars, and plates",
//           "Dumbbells from 5lbs to 250lbs"
//         ]}
//         reverse
//       />
//       <Section
//         image={features3}
//         title="One-on-One Coaching"
//         subtitle="Train smarter with expert coaches guiding your journey"
//         bullets={[
//           "Tailored weight loss plans",
//           "Competitive-level CrossFit training",
//           "Powerlifting coaching"
//         ]}
//       />
//       <Section
//         image={features4}
//         title="Exclusive Member Events"
//         subtitle="Build community and push limits with member-only events"
//         bullets={[
//           "Friendly in-house competitions",
//           "Challenges every month",
//           "Summer cookouts, games, and meetups"
//         ]}
//         reverse
//       />
//     </>
//   );
// };

// export default GroupCrossFit;




import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import features1 from "../assets/features1.avif";
import feature2 from "../assets/features2.jpg";
import features3 from "../assets/features3.avif";
import features4 from "../assets/features4.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const SectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const Section = ({ image, title, subtitle, bullets, reverse }) => (
  <div className="bg-neutral-950 text-white py-16 px-4 md:px-16">
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16 items-center ${reverse ? 'sm:flex-row-reverse' : ''}`}>
      <SectionWrapper>
        <div className="w-full flex justify-center sm:justify-start">
          <img
            src={image}
            className="rounded-2xl w-full max-w-md md:max-w-full h-auto object-cover"
            alt={title}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-6">
          <div className="border-2 border-lime-900 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl w-fit">
            {title}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {subtitle}
          </h2>
          <div className="space-y-3 text-sm sm:text-base">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCircleCheck} className="text-green-700 mt-1" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  </div>
);

const GroupCrossFit = () => {
  return (
    <>
      <Section
        image={features1}
        title="Group CrossFit Sessions"
        subtitle="Stay active and energized with our fun CrossFit group sessions"
        bullets={[
          "Only 30 minutes per class",
          "Includes warm-up and workout",
          "Designed to be fun and motivating"
        ]}
      />
      <Section
        image={feature2}
        title="Strength Zone"
        subtitle="Dominate your lifting goals with elite strength gear"
        bullets={[
          "Powerlifting and strongman area",
          "Olympic platforms, bars, and plates",
          "Dumbbells from 5lbs to 250lbs"
        ]}
        reverse
      />
      <Section
        image={features3}
        title="One-on-One Coaching"
        subtitle="Train smarter with expert coaches guiding your journey"
        bullets={[
          "Tailored weight loss plans",
          "Competitive-level CrossFit training",
          "Powerlifting coaching"
        ]}
      />
      <Section
        image={features4}
        title="Exclusive Member Events"
        subtitle="Build community and push limits with member-only events"
        bullets={[
          "Friendly in-house competitions",
          "Challenges every month",
          "Summer cookouts, games, and meetups"
        ]}
        reverse
      />
    </>
  );
};

export default GroupCrossFit;
