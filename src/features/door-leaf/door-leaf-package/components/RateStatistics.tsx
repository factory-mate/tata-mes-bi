import { lineCompleteRateQO } from '../queries'

export function RateStatistics() {
  const { data } = useQuery(
    lineCompleteRateQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010101'
    })
  )

  return (
    <div className="flex size-full flex-col items-center justify-center space-y-4">
      <span className="text-4xl">达成率</span>
      <span className="text-5xl font-bold">
        <AnimatedNumber value={data?.at(0)?.iRate} />
      </span>
    </div>
  )
}
