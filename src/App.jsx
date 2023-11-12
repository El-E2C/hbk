import { useEffect, useState } from 'react'

import Imagen from './Imagen'
import TextFade from './TextFade'

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
      <TextFade>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        assumenda voluptas, maiores harum, nam non perspiciatis magnam eius ex
        ipsa, nostrum culpa fuga porro? Eaque laboriosam cum natus sed
        perspiciatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Velit architecto neque suscipit, enim voluptas quo cum hic excepturi
        laudantium recusandae ad officiis voluptatem esse repudiandae culpa
        eveniet distinctio! Quia, doloremque! o algo asi
      </TextFade>
      a
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
        {/*   <Imagen /> */}
      </div>
      <br />
    </div>
  )
}

const Basca = () => {
  return <div className=" h-screen">Basca</div>
}
