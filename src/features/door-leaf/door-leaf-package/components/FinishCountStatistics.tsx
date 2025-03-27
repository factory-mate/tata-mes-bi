import { lineCompleteRateQO } from '../queries'

export function FinishCountStatistics() {
  const { data } = useQuery(
    lineCompleteRateQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010101'
    })
  )

  return (
    <div className="flex size-full flex-col items-center justify-center space-y-4">
      <span className="text-3xl">完成数</span>
      <span className="text-4xl font-bold">
        <AnimatedNumber value={data?.EndCount} />
      </span>
    </div>
  )
}
