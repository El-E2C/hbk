import { useEffect, useState } from 'react'

import Imagen from './Imagen'

export default function App() {
  const [scroll, setScroll] = useState(0)
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

    // Eliminar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // El segundo argumento, una matriz vacía, indica que este efecto se ejecuta solo en el montaje y desmontaje

  return (
    <div className="text-3xl">
      a
      <br /> a
      <div className="border h-96 w-1/2 m-auto overflow-y-scroll">
        <article className="bg-blue-400 h-full w-full"></article>
        <article className="bg-rose-400 h-full w-full"></article>
      </div>
      <br /> a
      <br /> a
      <br />
      a
      <br /> a
      <br /> a
      <br /> a
      <br /> a
      <br />
      <div className="inline-flex ">
        <div className="w-32">a</div>
        <Imagen />
      </div>
      <br />
    </div>
  )
}

const Basca = () => {
  return <div className=" h-screen">Basca</div>
}
