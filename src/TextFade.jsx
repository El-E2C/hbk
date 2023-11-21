export default function TextFade({ children }) {
  if (children) {
    const words = children.split(' ')
    const step = 1 / words.length
    console.log('render')
    return (
      <p>
        {words.map((e, i) => (
          <span
            key={i}
            style={{ opacity: 0.5 - step * i }}
            className="select-none"
          >
            {e + ' '}
          </span>
        ))}
      </p>
    )
  } else return <></>
}
