import { useEffect, useState } from 'react'

import Cover from './components/Cover'
import CoverFooter from './components/CoverFooter'
import Mejorado from './components/Mejorado'
import BeforeAll from './components/BeforeAll'
import Anim from './components/Anim'
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true)
    }
    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const [isMovile, setIsMovile] = useState(true)
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      console.log('La página se abrió en un dispositivo móvil')
      setIsMovile(true)
    } else {
      console.log('La página se abrió en una PC')
      setIsMovile(false)
    }
  }, [])

  return (
    <div className="text-3xl font-Jost">
      <div className="block md:hidden flex items-center justify-center h-screen w-screen text-center">
        Esta página la diseñe para verse en una pantalla grande, asi que no la
        podras ver hasta que se abra desde una computadora
      </div>
      {!isMovile && (
        <div className="">
          <Cover isLoaded={isLoaded} />
          <CoverFooter isLoaded={isLoaded} />
          <BeforeAll isLoaded={isLoaded} />
          <div className="bg-teal-500/10 p-5 shadow-xl ">
            <h2 className="text-center bg-gradient-to-r from-teal-300 text-4xl font-semibold to-green-500 bg-clip-text text-transparent">
              Algo que nunca olvidare
            </h2>
            <Anim />
          </div>
          <Mejorado />

          <br />
          <div className="bg-blue-400/5 text-center p-1 text-xl flex flex-col text-blue-300">
            <p>
              {String.raw`while (true) { u! ? continue : ( 'i <' + 12/4 +  ' u') }`}
            </p>
            <p className="text-sm text-white/10">
              {String.raw`donde 'u' eres tu`}
            </p>
          </div>

          <footer className="font-Fugg bg-teal-500 p-1 text-teal-900 text-4xl font-semibold text-center">
            Angel Ramírez
          </footer>
        </div>
      )}
    </div>
  )
}

const Basca = () => {
  return <div className=" h-screen">Basca</div>
}
