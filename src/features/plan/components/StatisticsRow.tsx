export function StatisticsRow() {
  const data = [
    { label: '接单数', value: 3000 },
    { label: '接单门数', value: 12 },
    { label: '下单数', value: 20 },
    { label: '下单门数', value: 20 },
    { label: '未下单数', value: 12 },
    { label: '未下门数', value: 11 },
    { label: '出货单数', value: 1000 },
    { label: '出货门数', value: 10 }
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
