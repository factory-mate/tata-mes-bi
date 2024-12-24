import type { WXTJVo } from './types'

export class DeviceAPI {
  private static apiPrefix = `${KB_SERVICE_API_PREFIX}/DEVICE_FALUTVOUCH`

  static async getWXTJ(signal?: AbortSignal) {
    return httpClient.get<WXTJVo>(`${this.apiPrefix}/Get_WXTJ`, {}, { signal })
  }

  static async getBYTJ(signal?: AbortSignal) {
    return httpClient.get(`${this.apiPrefix}/Get_BYTJ`, {}, { signal })
  }

  static async getDJTJ(signal?: AbortSignal) {
    return httpClient.get(`${this.apiPrefix}/Get_DJTJ`, {}, { signal })
  }

  static async getWXCSTJ(signal?: AbortSignal) {
    return httpClient.get(`${this.apiPrefix}/Get_WXCSTJ`, {}, { signal })
  }
}
