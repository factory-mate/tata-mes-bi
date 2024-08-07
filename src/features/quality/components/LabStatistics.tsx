export function LabStatistics() {
  const data = [
    { label: '检验类别', value: '板材类' },
    { label: '检验次数', value: 100 },
    { label: '合格次数', value: 95 },
    { label: '合格率', value: '95%' }
  ]
  return (
    <div className="flex size-full flex-col items-center justify-between">
      <div />
      <div className="text-lg font-semibold">实验室理化检验</div>
      {data.map((i) => (
        <div
          key={i.label}
          className="space-x-4 text-xl"
        >
          <span>{i.label}:</span>
          <span className="text-xl font-bold">{i.value}</span>
        </div>
      ))}
      <div />
    </div>
  )
}
