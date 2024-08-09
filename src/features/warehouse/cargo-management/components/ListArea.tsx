import { cargoData, cargoTypeColorMap } from '../mock'

export function ListArea() {
  return (
    <div className="flex h-full flex-col space-y-2 overflow-y-auto">
      {cargoData.map((g) => (
        <div
          key={g.id}
          className="flex space-x-4 border border-gray-400 p-2"
        >
          <div className="w-40 shrink-0 text-xl font-semibold">{g.name}</div>
          <div className="flex flex-wrap items-center gap-2">
            {g.data.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center rounded-sm px-4 py-2 text-white"
                style={{ backgroundColor: cargoTypeColorMap.get(c.type) }}
              >
                <div className="text-xl font-semibold">{c.name}</div>
                <div className="text-sm">
                  ({c.current}/{c.total})
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
