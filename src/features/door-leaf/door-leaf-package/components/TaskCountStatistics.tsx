import { lineCompleteRateQO } from '../queries'

export function TaskCountStatistics() {
  const { data } = useQuery(
    lineCompleteRateQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010101'
    })
  )

  return (
    <div className="flex size-full flex-col items-center justify-center space-y-4">
      <span className="text-4xl">任务数量</span>
      <span className="text-5xl font-bold">
        <AnimatedNumber value={data?.at(0)?.AllCount} />
      </span>
    </div>
  )
}
