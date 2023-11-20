import { useEffect, useState } from 'react'

import Cover from './components/Cover'
import CoverFooter from './components/CoverFooter'
import Mejorado from './components/Mejorado'
import BeforeAll from './components/BeforeAll'
export default function App() {
  /*   const [scroll, setScroll] = useState(0)
  useEffect(() => {
    // Agregar el event listener al montar el componente
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScroll(scrollPosition)
      if (scrollPosition >= 200) {
        // Realiza acciones cuando se alcanza cierto punto de desplazamiento
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) */
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
          <Mejorado />
          a
          <br /> a
          <br /> a
          <br />
          a
          <br /> a
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> a
          <br />
          <div className="inline-flex ">
            <div className="w-32">a</div>
            {/*   <Imagen /> */}
          </div>
          <br />
        </div>
      )}
    </div>
  )
}

const Basca = () => {
  return <div className=" h-screen">Basca</div>
}
