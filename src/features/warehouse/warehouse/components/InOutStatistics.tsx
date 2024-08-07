export function InOutStatistics() {
  const data = [
    { label: '计划入库订单日期', value: '2024-05-05' },
    { label: '计划出库订单日期', value: '2024-05-05' }
  ]
  return (
    <div className="flex size-full flex-col items-center justify-between">
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
