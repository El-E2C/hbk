import { useEffect, useState } from 'react'
import { useSpring, animated, easings } from '@react-spring/web'

import img from '../assets/fondoxd.png'
export default function Cover() {
  const [isActive, setIsActive] = useState(false)

  const styles = useSpring({
    from: { opacity: 0, transform: 'translate3d(-100%, -100%, 0)' },
    to: {
      opacity: isActive ? 1 : 0,
      transform: isActive
        ? 'translate3d(0, 0%, 0)'
        : 'translate3d(-100%, -100%, 0)',
    },
    delay: 400,
    config: {
      duration: 800,

      easing: easings.easeInOutBack,
    },
  })
  useEffect(() => {
    const handleLoad = () => {
      console.log('La página se ha cargado completamente.')
      setIsActive(true)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div className="relative w-full h-[80vh] overflow-clip">
      <img src={img} alt="fondo" className="" />
      <div className="absolute top-0 left-0 h-full w-full border-4 border-red-400 flex flex-col justify-center items-center">
        <animated.div style={styles}>
          <p className="text-7xl font-bold font-Sriracha">
            dolor sit.
            <Color> Lorem, ipsum.</Color>
          </p>
        </animated.div>
      </div>
    </div>
  )
}

const Color = ({ children }) => {
  return (
    <span className="bg-gradient-to-tr from-orange-400 to-rose-600 bg-clip-text text-transparent ">
      {children}
    </span>
  )
}
