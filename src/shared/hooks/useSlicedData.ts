export interface UseSlicedDataProps {
  data?: any[]
  interval?: number
  xAxisSize?: number
}

export interface UseSlicedData {
  maxValue: number
  currentSlicedData: any[]
}

export function useSlicedData({
  data = [],
  interval = 5000,
  xAxisSize = 5
}: UseSlicedDataProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalSize = useMemo(() => Math.ceil(data.length / xAxisSize), [data, xAxisSize])

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % totalSize), interval)
    return () => clearInterval(timer)
  }, [totalSize, interval])

  const currentSlicedData = useMemo(() => {
    const start = currentIndex * xAxisSize
    return data.slice(start, start + xAxisSize)
  }, [currentIndex, data, xAxisSize])

  return {
    currentSlicedData
  }
}
