import React from 'react'
import { useSpring, animated, easings } from '@react-spring/web'

export default function CoverFooter({ isLoaded }) {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLoaded ? 1 : 0 },
    delay: 1200,
    config: {
      duration: 1000,
      easing: easings.easeInOutBack,
    },
  })

  return (
    <animated.div
      className="bg-indigo-600 text-xl text-center p-1 text-indigo-200 shadow-xl "
      style={styles}
    >
      Habrá muchas cosas que termino olvidando por completo, o que quizá nunca
      note, pero me es imposible olvidar una fecha tan importante como esta
    </animated.div>
  )
}
