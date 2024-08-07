export function StatisticsRow() {
  const data = [
    { label: '未完全入库订单数', value: 200 },
    { label: '生产日期', value: '2024-05-05' },
    { label: '已入齐货位数', value: 20 },
    { label: '已入库包数', value: 20 },
    { label: '总包数', value: 12 }
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
