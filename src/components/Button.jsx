// import React from 'react'

// const Button = (props) => {
//   return (
//     <button
//       type="button"
//       className="py-2.5 px-6 me-2 mb-2 text-xs sm:text-sm md:text-sm font-semibold text-black bg-[#96fb57] rounded-full shadow-md hover:bg-[#85e84d] transition-all duration-200 focus:outline-none focus:ring-[#96fb57]/50"
//     >
//       {props.content}
//     </button>
//   )
// }

// export default Button



import React from 'react'

const Button = ({
  content,
  bgColor = '#96fb57',
  hoverColor = '#85e84d',
  textColor = '#000000'
}) => {
  const [isHovering, setIsHovering] = React.useState(false)

  return (
    <button
      type="button"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundColor: isHovering ? hoverColor : bgColor,
        color: textColor
      }}
      className="py-2.5 px-6 me-2 mb-2 text-xs sm:text-sm md:text-sm font-semibold rounded-full shadow-md transition-all duration-200 focus:outline-none"
    >
      {content}
    </button>
  )
}

export default Button
