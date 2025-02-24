import { basicInfoQO } from '../queries'
import type { BasicInfoVo } from '../types'

export function StatisticsBlock() {
  const templates: Templates<BasicInfoVo> = [
    { label: '车间主任', key: 'cDefindParm03' },
    { label: '线长人数', key: 'iManagerCount' },
    { label: '标配工人', key: 'iStandartWokerCount' },
    { label: '实际工人', key: 'iActureWokerCount' },
    { label: '质量担当', key: 'cDefindParm01' },
    { label: '设备担当', key: 'cDefindParm02' }
  ]

  const { data } = useQuery(
    basicInfoQO({
      orderByFileds: 'cFactoryUnitCode',
      conditions: 'cFactoryUnitCode like FM0105'
    })
  )

  return (
    <div className="flex size-full items-center justify-between">
      <div />
      {templates.map((i) => (
        <div
          key={i.label}
          className="space-x-4 text-2xl"
        >
          <span>{i.label}:</span>
          <span className="text-2xl font-bold">{data?.[i.key]}</span>
        </div>
      ))}
      <div />
    </div>
  )
}
