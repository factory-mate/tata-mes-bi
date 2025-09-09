import styles from './index.module.scss'

interface ScrollTableNewProps<T extends Record<string, any>> {
  title?: string
  columns?: ScrollTableColumns<T>[]
  data?: T[]
  style?: React.CSSProperties
  border?: boolean
  showIndex?: boolean
}

interface ScrollTableColumns<T> {
  label: string
  key: keyof T
  width?: number
  color?: string
}

export default function ScrollTableNew<T extends Record<string, any> = object>(
  props: ScrollTableNewProps<T>
) {
  const { title, columns, data, style, border, showIndex } = props

  const scrollRef = useRef<HTMLDivElement>(null)
  const currentScrollRef = useRef(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isDelaying, setIsDelaying] = useState(false)

  useEffect(() => {
    if (!scrollRef.current || !data?.length) {
      return () => {}
    }

    const scrollElement = scrollRef.current
    const { scrollHeight } = scrollElement
    const { clientHeight } = scrollElement

    const scroll = () => {
      if (isPaused || isDelaying) {
        return
      }
      currentScrollRef.current = scrollElement.scrollTop + 1
      if (currentScrollRef.current >= scrollHeight - clientHeight) {
        setIsDelaying(true)

        const startTime = Date.now()
        const startPosition = currentScrollRef.current

        const smoothScroll = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / 1000, 1)

          const easeOut = (t: number) => 1 - (1 - t) ** 3
          const currentPosition = startPosition * (1 - easeOut(progress))

          scrollElement.scrollTop = currentPosition
          currentScrollRef.current = currentPosition

          if (progress < 1) {
            requestAnimationFrame(smoothScroll)
          } else {
            setTimeout(() => {
              setIsDelaying(false)
            }, 1000)
          }
        }

        requestAnimationFrame(smoothScroll)
        return
      }
      scrollElement.scrollTop = currentScrollRef.current
    }

    const timer = setInterval(scroll, 50)

    return () => clearInterval(timer)
  }, [data, isPaused, isDelaying])

  return (
    <div
      className={clsx(
        'flex size-full flex-col overflow-hidden',
        border && 'border border-solid border-white'
      )}
      style={style}
    >
      <span className="ml-8 h-[12.5%] text-left text-lg font-semibold leading-9">{title}</span>
      <div
        ref={scrollRef}
        className={clsx('h-[87.5%] overflow-y-scroll text-lg', styles.hideScrollbar)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {!data?.length && (
          <div className="absolute top-[55%] w-full text-center text-2xl">暂无数据</div>
        )}
        <table className="w-full table-auto">
          <thead>
            <tr>
              {showIndex && <th className="sticky top-0 z-50 w-12 bg-blue-400 py-1">序号</th>}
              {columns?.map((column) => (
                <th
                  key={column.key.toString()}
                  className="sticky top-0 z-50 bg-blue-400 py-1"
                  style={{ width: column.width }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(data ?? [])?.map((row: any, index) => (
              <tr key={index}>
                {showIndex && <td className="py-1 text-center">{index + 1}</td>}
                {columns?.map((column) => (
                  <td
                    key={column.key.toString()}
                    className="py-1 text-center"
                    style={{ color: column.color }}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
ScrollTable.displayName = 'ScrollTable'
