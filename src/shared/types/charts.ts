interface Template<T> {
  label: string
  key: keyof T
}

export type Templates<T> = Template<T>[]

export interface ChartRawData {
  [key: string]: any
}
