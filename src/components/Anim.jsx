import { useRef, useEffect, useState } from 'react'
import { useSpring, animated, easings } from '@react-spring/web'
import gi from '../assets/gi.png'
import Imagen from './Imagen'
const Anim = () => {
  // Crear una referencia usando useRef
  const miRef = useRef()
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Es visible:', entry.isIntersecting)
        if (entry.isIntersecting) setIsVisible(entry.isIntersecting)
      },
      {
        root: null, // null indica el viewport
        rootMargin: '0px', // márgenes alrededor del viewport
        threshold: 0.5, // umbral de intersección (50% del elemento debe estar visible)
      }
    )

    if (miRef.current) {
      observer.observe(miRef.current)
    }

    return () => {
      if (miRef.current) {
        observer.unobserve(miRef.current)
      }
    }
  }, [])
  const styles = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)', scale: 0.5 },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
      scale: isVisible ? 1 : 0.5,
    },
    delay: 600,
    config: {
      duration: 800,

      easing: easings.easeInOutBack,
    },
  })

  return (
    <div className="text-2xl text-white/50 relative justify-center w-2/3 m-auto overflow-hidden">
      <section className="flex gap-5 justify-center items-center px-20 p-5">
        <animated.img
          src={gi}
          alt="img"
          className="rounded-xl shadow-lg w-1/3"
          style={useSpring({
            from: {
              opacity: 0,
              transform: 'translate3d(100%, 0, 0)',
              scale: 0.5,
            },
            to: {
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translate3d(0, 0, 0)'
                : 'translate3d(100%, 0, 0)',
              scale: isVisible ? 1 : 0.5,
            },
          })}
        />

        <p className="text-right">
          Por ejemplo, una de las cosas que más impactó en mis recuerdos y que
          aunque no lo pareció, tuvo mucho más significado para mi de lo que
          crees
        </p>
      </section>
      <section className="relative p-10">
        <p className="w-1/3">
          Me gustó tanto que lo intenté recrear en un componente, y jugando un
          poco con las capas, estados y animaciones, esto fue lo más parecido
          que pude hacer ✨
        </p>
        <animated.div className="right-0 bottom-0 absolute" style={styles}>
          <Imagen />
        </animated.div>
      </section>
      <div ref={miRef}></div>
    </div>
  )
}

export default Anim
