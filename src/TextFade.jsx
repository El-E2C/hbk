export default function TextFade({ children }) {
  if (children) {
    const words = children.split(' ')
    const step = 1 / words.length
    return words.map((e, i) => (
      <span
        key={e}
        style={{ opacity: 0.92 - step * i }}
        className="select-none"
    >
        {e + ' '}
      </span>
    ))
  } else return <></>
}
