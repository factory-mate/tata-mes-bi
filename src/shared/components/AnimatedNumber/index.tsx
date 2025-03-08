interface AnimatedNumberProps {
  value?: number
}

export default function AnimatedNumber({ value }: AnimatedNumberProps) {
  const previousValue = useRef(0)

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (value === undefined) {
      return () => {}
    }

    const diff = value - previousValue.current
    const steps = 20
    const increment = diff / steps
    let { current } = previousValue

    const timer = setInterval(() => {
      current += increment
      if ((increment >= 0 && current >= value) || (increment < 0 && current <= value)) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.round(current))
      }
    }, 50)

    previousValue.current = value
    return () => clearInterval(timer)
  }, [value])

  return <>{displayValue}</>
}
AnimatedNumber.displayName = 'AnimatedNumber'
