import dayjs from 'dayjs'

export default function ClockPanel() {
  const [currentTime, setCurrentTime] = useState(dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => clearInterval(timer)
  })

  return <div className="text-3xl">{currentTime}</div>
}
