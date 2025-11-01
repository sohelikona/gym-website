import React from 'react'
import logo from '../assets/gym.png' 

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-6">
        <img src={logo} alt="Logo" className="w-16 h-16" />

        <h4 className="font-bold uppercase tracking-wide">Navigation</h4>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">CrossFit Classes</a>
          <a href="#" className="hover:underline">Strength Training</a>
          <a href="#" className="hover:underline">Personal Training</a>
          <a href="#" className="hover:underline">Member Events</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        <p className="text-xs text-gray-400">Copyright 2025 | Fitr Media</p>
      </div>
    </footer>
  )
}

export default Footer
