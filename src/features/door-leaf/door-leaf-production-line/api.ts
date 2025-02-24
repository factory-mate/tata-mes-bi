import type {
  DeviceRepairDto,
  DeviceRepairVo,
  HourCompletionVo,
  InternalReturnReasonVo,
  InternalReturnType,
  LineCompleteRateVo,
  LinePersonVo,
  MaterialCallVo,
  MaterialType,
  UnfinishedTaskVo
} from './types'

export class DoorLeafProductionLineAPI {
  private static apiPrefix = KB_SERVICE_API_PREFIX

  static async getLineCompleteRate(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<LineCompleteRateVo>(`${this.apiPrefix}/MES_TASK/Get_CXDCL`, data, {
      signal
    })
  }

  static async getLinePerson(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<LinePersonVo>(`${this.apiPrefix}/LINE_EXTEND/Get_LINE_EXTEND`, data, {
      signal
    })
  }

  static async getMaterialCall(data: PageDto, signal?: AbortSignal) {
    return httpClient.post<Page<MaterialCallVo>>(
      `${this.apiPrefix}/WMS_MATERIAL_APPLYFOR/GetForPage`,
      data,
      { signal }
    )
  }

  static async getInternalReturnType(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<InternalReturnType>(
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_NFZB`,
      data,
      {
        signal
      }
    )
  }

  static async getMaterialType(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<MaterialType>(`${this.apiPrefix}/MES_TASK/Get_CZTJ`, data, {
      signal
    })
  }

  static async getInternalReturnReason(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<InternalReturnReasonVo[]>(
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_NFYYTJ`,
      data,
      {
        signal
      }
    )
  }

  static async getDeviceRepair(params: DeviceRepairDto, signal?: AbortSignal) {
    return httpClient.post<Page<DeviceRepairVo>>(
      `${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_SBWXForPage`,
      {},
      { signal, params }
    )
  }

  static async getUnfinishedTask(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<Page<UnfinishedTaskVo>>(`${this.apiPrefix}/MES_TASK/Get_WWGTJ`, data, {
      signal
    })
  }

  static async getHourCompletion(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<HourCompletionVo[]>(`${this.apiPrefix}/MES_TASK/Get_WGTJ`, data, {
      signal
    })
  }
}
