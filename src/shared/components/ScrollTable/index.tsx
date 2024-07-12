import styles from './index.module.scss'

interface ScrollTableProps<T extends Record<string, any>> {
  title?: string
  columns?: ScrollTableColumns<T>[]
  data?: T[]
}

interface ScrollTableColumns<T> {
  label: string
  key: keyof T
  width?: number
}

export default function ScrollTable<T extends Record<string, any> = object>(
  props: ScrollTableProps<T>
) {
  const { title, columns, data } = props

  return (
    <div className="flex size-full flex-col overflow-hidden">
      <span className="mb-2 text-center text-lg font-semibold">{title}</span>
      <div className={clsx('grow overflow-y-scroll', styles.hideScrollbar)}>
        <table className="w-full table-auto">
          <thead>
            <tr>
              {columns?.map((column) => (
                <th
                  key={column.key.toString()}
                  className="sticky top-0 z-50 bg-blue-400 py-1"
                  style={{ width: column.width }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(data ?? [])?.map((row: any, index) => (
              <tr key={index}>
                {columns?.map((column) => (
                  <td
                    key={column.key.toString()}
                    className="py-1 text-center"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
ScrollTable.displayName = 'ScrollTable'
