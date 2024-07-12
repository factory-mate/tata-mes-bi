import dayjs from 'dayjs'

export function TitleRow() {
  const [currentTime, setCurrentTime] = useState(dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
    return () => clearInterval(timer)
  })

  return (
    <div className="relative size-full">
      <div className="flex size-full flex-col items-center justify-center">
        <div className="absolute top-0 text-3xl font-semibold">门扇车间看板</div>

        <div className="scale-75">
          <svg
            width="758"
            height="80"
          >
            <polyline
              fill="transparent"
              strokeWidth="3"
              points="0,18.400000000000002 136.44,18.400000000000002 151.6,36.800000000000004 189.5,36.800000000000004 204.66000000000003,55.199999999999996 545.76,55.199999999999996 568.5,36.800000000000004 606.4,36.800000000000004 621.56,18.400000000000002 758,18.400000000000002"
              stroke="#6DFAFC"
            >
              <animate
                attributeName="stroke-dasharray"
                attributeType="XML"
                from="0, 395.2771566301341, 0, 395.2771566301341"
                to="0, 0, 790.5543132602681, 0"
                dur="3s"
                begin="0s"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.4,1,0.49,0.98"
                repeatCount="indefinite"
              />
            </polyline>
            <polyline
              fill="transparent"
              strokeWidth="2"
              points="227.4,73.60000000000001 530.6,73.60000000000001"
              stroke="#6DFAFC"
            >
              <animate
                attributeName="stroke-dasharray"
                attributeType="XML"
                from="0, 151.60000000000002, 0, 151.60000000000002"
                to="0, 0, 303.20000000000005, 0"
                dur="3s"
                begin="0s"
                calcMode="spline"
                keyTimes="0;1"
                keySplines=".4,1,.49,.98"
                repeatCount="indefinite"
              />
            </polyline>
          </svg>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 my-auto h-fit text-2xl">{currentTime}</div>
    </div>
  )
}
