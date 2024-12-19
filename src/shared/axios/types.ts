import type { HttpStatusCode } from 'axios'

export interface R<T = unknown> {
  msg: string
  status: HttpStatusCode
  success: boolean
  data: T
}
