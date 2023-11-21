import color from '../assets/color.png'
import borde from '../assets/borde.png'
import { useState } from 'react'

export default function Imagen({ className }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <button
        className="px-4 py-2 rounded-md m-4 active:bg-gray-200  active:scale-95 active:text-purple-700 transition-all bg-purple-500 text-purple-50 hover:scale-110"
        onClick={() => setIsActive(!isActive)}
      >
        Haz click aquí 👈
      </button>
      <section className="relative">
        {/* CARD  */}
        <article
          className={`absolute h-44 w-44 transition-all duration-500 ease-in-out  left-6 ${
            isActive ? '-top-44' : 'top-0'
          }`}
        >
          {/* AGARRADERA */}
          <div className="w-44 h-6 absolute bg-violet-700  -top-6 "></div>
          {/* IMÁGENES */}
          <div className="w-44 h-44 absolute top-0">
            <img
              src={borde}
              alt="borde"
              className="w-full absolute top-0 left-0 z-30"
            />
            <img
              src={color}
              alt="color"
              className="w-full absolute top-0 left-0 z-10 bg-white/20 backdrop-blur-sm"
            />
          </div>
        </article>
        <div className="bg-white  h-44 w-44 absolute z-20 left-6"></div>
        <div className="bg-violet-500 h-48 w-56 shadow-xl"></div>
        <div className="bg-violet-500 h-6 w-56 absolute top-0 z-40 "></div>
      </section>
    </div>
  )
}
