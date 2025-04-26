import type { FullPageDto } from '@/shared/types'

import type {
  DeviceRepairDto,
  DeviceRepairVo,
  HourCompletionVo,
  InternalReturnReasonVo,
  InternalReturnType,
  LateProductionVo,
  LineCompleteRateVo,
  LinePersonVo
} from './types'

export class DoorLeafPackageAPI {
  private static apiPrefix = KB_SERVICE_API_PREFIX

  static async getLineCompleteRate(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.get<LineCompleteRateVo[]>(`${this.apiPrefix}/MES_TASK/Get_MSBZ_CXDCL`, data, {
      signal
    })
  }

  static async getLinePerson(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<LinePersonVo>(`${this.apiPrefix}/LINE_EXTEND/Get_LINE_EXTEND`, data, {
      signal
    })
  }

  static async getInternalReturnType(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<InternalReturnType>(
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_GD_NFZB`,
      data,
      {
        signal
      }
    )
  }

  static async getDeviceUtilizationRate() {
    return httpClient.get<number>(`${this.apiPrefix}/MES_TASK/Get_JDL_MSBZ`)
  }

  static async getDeviceRepair(params: DeviceRepairDto, signal?: AbortSignal) {
    return httpClient.post<Page<DeviceRepairVo>>(
      `${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_SBWXForPage`,
      {},
      { signal, params }
    )
  }

  static async getHourCompletion(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<HourCompletionVo[]>(`${this.apiPrefix}/MES_TASK/Get_WGTJ`, data, {
      signal
    })
  }

  static async getProductionLate(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<LateProductionVo[]>(`${this.apiPrefix}/MES_TASK/Get_WQTJ`, data, {
      signal
    })
  }

  static async getInternalReturnReason(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<InternalReturnReasonVo[]>(
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_GD_NFYYTJ`,
      data,
      { signal }
    )
  }
}
