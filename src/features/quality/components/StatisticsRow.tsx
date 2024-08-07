export function StatisticsRow() {
  const data = [
    { label: '成品要求检验包数', value: 3000 },
    { label: '已检包数', value: 12 },
    { label: '完成率', value: '50%' },
    { label: '合格包数', value: 20 },
    { label: '合格率', value: '100%' },
    { label: '抽检组别', value: 'BC线' },
    { label: '合格率', value: '95%' }
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
