export function StatisticsRow() {
  const data = [
    { label: '线长人数', value: 4 },
    { label: '标配工人', value: 12 },
    { label: '实际工人', value: 20 },
    { label: '质量担当', value: 12 },
    { label: '设备担当', value: 11 }
  ]
  return (
    <div className="flex size-full items-center justify-between">
      <div />
      {data.map((i) => (
        <div
          key={i.label}
          className="space-x-4 text-2xl"
        >
          <span>{i.label}:</span>
          <span className="text-2xl font-bold">{i.value}</span>
        </div>
      ))}
      <div />
    </div>
  )
}
