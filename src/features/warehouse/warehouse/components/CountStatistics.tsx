export function CountStatistics() {
  const data = [
    { label: '库存总单数', value: 100 },
    { label: '库存总门数', value: 123 },
    { label: '库存总套数', value: 124 },
    { label: '齐套单数', value: 200 },
    { label: '未齐套订单数', value: 200 },
    { label: '已报工门数', value: 200 }
  ]
  return (
    <div className="grid size-full grid-cols-3 grid-rows-2 items-center justify-center">
      {data.map((i) => (
        <div
          key={i.label}
          className="flex justify-center space-x-4 text-2xl"
        >
          <span>{i.label}:</span>
          <span className="text-2xl font-bold">{i.value}</span>
        </div>
      ))}
    </div>
  )
}
