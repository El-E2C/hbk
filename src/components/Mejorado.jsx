import { useSpring, animated, easings } from '@react-spring/web'

import TextFade from '../TextFade'
export default function Mejorado({ isLoaded }) {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: isLoaded ? 1 : 0 },
    delay: 2200,
    config: {
      duration: 1000,
      easing: easings.easeInOutBack,
    },
  })
  return (
    <section className="p-5 flex justify-end">
      <animated.div className="w-1/2" style={styles}>
        <TextFade>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          assumenda voluptas, maiores harum, nam non perspiciatis magnam eius ex
          ipsa, nostrum culpa fuga porro? Eaque laboriosam cum natus sed
          perspiciatis! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Velit architecto neque suscipit, enim voluptas quo cum hic
          excepturi laudantium recusandae ad officiis voluptatem esse
          repudiandae culpa eveniet distinctio! Quia, doloremque! o algo asi
        </TextFade>
      </animated.div>
    </section>
  )
}
