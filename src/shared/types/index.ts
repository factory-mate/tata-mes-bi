interface Template<T> {
  label: string
  key: keyof T
}

export type Templates<T> = Template<T>[]
