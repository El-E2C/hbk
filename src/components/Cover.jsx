import { useEffect, useState } from 'react'
import { useSpring, animated, easings } from '@react-spring/web'
import ConfettiExplosion from 'react-confetti-explosion'

import img from '../assets/fondoxd.png'
export default function Cover({ isLoaded: isActive }) {
  const [isConfetti, setIsConfetti] = useState(true)
  const styles = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -100%, 0)', scale: 0.5 },
    to: {
      opacity: isActive ? 1 : 0,
      transform: isActive ? 'translate3d(0, 0%, 0)' : 'translate3d(0, -100, 0)',
      scale: isActive ? 1 : 0.5,
    },
    delay: 400,
    config: {
      duration: 800,

      easing: easings.easeInOutBack,
    },
  })

  return (
    <div className="relative w-full h-[70vh] overflow-clip select-none">
      <img src={img} alt="fondo" className="" />
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-center">
        <animated.div style={styles}>
          <p className="text-7xl font-bold font-Kaus">
            Feliz cumpleaños <Color> Karen Sulikey</Color>
          </p>
        </animated.div>
        {isActive && isConfetti && (
          <>
            <ConfettiExplosion
              className="-top-32 absolute"
              onComplete={() => setIsConfetti(false)}
            />
          </>
        )}
      </div>
    </div>
  )
}

const Color = ({ children }) => {
  return (
    <span className="bg-gradient-to-tr from-yellow-300 to-teal-400 bg-clip-text text-transparent ">
      {children}
    </span>
  )
}
