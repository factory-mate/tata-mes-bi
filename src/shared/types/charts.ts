interface Template<T> {
  label: string
  key: keyof T
  left?: string | number
  top?: string | number
}

export type Templates<T> = Template<T>[]

export interface ChartRawData {
  [key: string]: any
}
