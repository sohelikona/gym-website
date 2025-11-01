
import React from 'react'
import last from '../assets/last.webp'

const ContactForm = () => {
  return (
    <div className="bg-neutral-950 py-16 px-6 flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
      <form className="backdrop-blur-lg bg-white/10 text-white p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-lg">
        <h3 className="text-3xl font-bold mb-6 text-center">Claim Your 7-Day Free Trial</h3>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 rounded-lg bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <select
            className="p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option className='text-black' value="">Select Membership</option>
            <option value="month" className='text-black'>Month to Month</option>
            <option value="6month" className='text-black'>6 Month</option>
            <option value="1year" className='text-black'>1 Year</option>
            <option value="other" className='text-black'>Other</option>
          </select>

          <button
            type="submit"
            className="mt-4 bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </div>
      </form>

      <img
        src={last}
        alt="Gym visual"
        className="rounded-2xl w-full max-w-md object-cover shadow-2xl"
      />
    </div>
  )
}

export default ContactForm
