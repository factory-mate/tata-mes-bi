interface Template<T> {
  label: string
  key: keyof T
}

export type Templates<T> = Template<T>[]

export interface Page<T = any> {
  data: T[]
  pageIndex: number
  pageSize: number
  pageCount: number
  dataCount: number
}

export interface PageDto extends FullPageDto {
  pageIndex: number
  pageSize: number
}

export interface FullPageDto {
  conditions?: string
  orderByFileds?: string
}
