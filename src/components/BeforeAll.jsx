import entry from '/sk.svg'
import { useSpring, easings, animated } from '@react-spring/web'
export default function BeforeAll({ isLoaded }) {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLoaded ? 1 : 0 },
    delay: 2000,
    config: {
      duration: 1000,
      easing: easings.easeInOutBack,
    },
  })

  return (
    <animated.div className="text-lg p-16 flex justify-center" style={styles}>
      <div className="w-4/5 flex justify-center items-center">
        <div className="pr-5 text-justify w-2/3">
          <h3 className="text-4xl font-semibold bg-gradient-to-tl from-orange-500 to-yellow-200 w-fit bg-clip-text text-transparent">
            Antes que nada
          </h3>
          <p className="text-white/50">
            La idea de hacer esta página empezó el{' '}
            <strong className="text-white/80">6 de abril 🚀</strong>cuando
            acababa de descubrir Tailwind CSS, en busca de una aplicación real
            que me <strong className="text-white/70">motivara</strong> a probar
            todo lo que estaba aprendiendo en ese momento, para ese entonces no
            avancé lo suficiente en cuanto diseño pero si en cuanto a lo que
            escribí e idee, asi que voy a cambiar cosas que tenia
          </p>
        </div>
        <img src={entry} alt="entry" className="w-1/3 h-fit " />
      </div>
    </animated.div>
  )
}
