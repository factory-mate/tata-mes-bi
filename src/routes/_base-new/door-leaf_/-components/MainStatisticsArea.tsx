import { internalReturnTypeQO, lineCompleteRateQO } from '@/features/door-leaf/door-leaf-package'

export default function MainStatisticsArea() {
  const { data } = useQuery(
    lineCompleteRateQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010101'
    })
  )

  const nfData = useQuery(
    internalReturnTypeQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode = FM01010401'
    })
  )

  return (
    <>
      <div
        className="absolute flex flex-col items-start justify-center space-y-4"
        style={{ left: '30.5%', top: '23.5%' }}
      >
        <span className="text-2xl">今日任务量</span>
        <span className="text-5xl font-bold">
          <AnimatedNumber value={data?.at(0)?.AllCount} />
        </span>
      </div>
      <div
        className="absolute flex flex-col items-start justify-center space-y-4"
        style={{ left: '30.5%', top: '51%' }}
      >
        <span className="text-2xl">今日产量</span>
        <span className="text-5xl font-bold">
          <AnimatedNumber value={(data?.at(0)?.EndCount ?? 0) + (data?.at(1)?.EndCount ?? 0)} />
        </span>
      </div>
      <div
        className="absolute flex flex-col items-end justify-center space-y-4"
        style={{ right: '30%', top: '23.5%' }}
      >
        <span className="text-2xl">生产达成率</span>
        <span className="text-5xl font-bold">
          <AnimatedNumber value={Number((data?.at(0)?.iRate ?? 0).toFixed(0))} />%
        </span>
      </div>
      <div
        className="absolute flex flex-col items-end justify-center space-y-4"
        style={{ right: '30%', top: '52%' }}
      >
        <span className="text-2xl">合格率</span>
        <span className="text-5xl font-bold">
          <AnimatedNumber value={Number((nfData.data?.at(0)?.OKRate ?? 0).toFixed(0))} />%
        </span>
      </div>
    </>
  )
}
