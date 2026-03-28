import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h2 className="font-bold text-2xl tracking-wide">
          Note<span className="text-orange-400">.JS</span>
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a className="hover:text-orange-400 transition duration-300" href="#">Home</a>

          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-400 text-gray-900 font-medium hover:scale-105 transition-all duration-300">
            Get in touch
            <span className="px-2 py-1 rounded-full bg-gray-900 text-white text-sm">
              →
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden px-6 pb-4 flex flex-col gap-4 transition-all duration-300 ${open ? 'block' : 'hidden'}`}>
        <a className="hover:text-orange-400 transition duration-300" href="#">Home</a>

        <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-400 text-gray-900 font-medium">
          Get in touch
          <span className="px-2 py-1 rounded-full bg-gray-900 text-white text-sm">
            →
          </span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar