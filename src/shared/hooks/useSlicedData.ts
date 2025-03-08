interface UseSlicedDataProps {
  data?: any[]
  size?: number
  interval?: number
  defaultMaxValue?: number
  maxValueKey?: string
  maxValueInterval?: number
}

export function useSlicedData({
  data = [],
  size = 10,
  interval = 5000,
  defaultMaxValue = 100,
  maxValueKey,
  maxValueInterval = 100
}: UseSlicedDataProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalSize = useMemo(() => Math.ceil(data.length / size), [data, size])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSize)
    }, interval)
    return () => clearInterval(timer)
  }, [totalSize, interval])

  const currentSlicedData = useMemo(() => {
    const start = currentIndex * size
    return data.slice(start, start + size)
  }, [currentIndex, data, size])

  const maxValue = useMemo(() => {
    if (!maxValueKey || currentSlicedData.length === 0) {
      return defaultMaxValue
    }
    const max = Math.max(...currentSlicedData.map((item) => item[maxValueKey]))
    return Math.ceil((max * 1.1) / maxValueInterval) * maxValueInterval
  }, [currentIndex, currentSlicedData, maxValueKey, defaultMaxValue, maxValueInterval])

  return {
    maxValue,
    currentSlicedData
  }
}
