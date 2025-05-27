import type { Page, PageDto } from '@/shared/types'

import type {
  CheckDto,
  CheckVo,
  DeviceRepairDto,
  DeviceRepairVo,
  DeviceRunningStatusVo,
  GaugeVo,
  HourCompletionVo,
  InternalReturnReasonVo,
  InternalReturnType,
  LineCompleteRateDto,
  LineCompleteRateVo,
  LinePersonVo,
  MaterialCallVo,
  MaterialType,
  UnfinishedTaskVo
} from './types'

export class DoorLeafProductionLineAPI {
  private static apiPrefix = KB_SERVICE_API_PREFIX

  static async getLineCompleteRate(data: LineCompleteRateDto, signal?: AbortSignal) {
    return httpClient.get<LineCompleteRateVo>(`${this.apiPrefix}/MES_TASK/Get_MS_CXDCL`, data, {
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
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_NFZB_MS`,
      data,
      {
        signal
      }
    )
  }

  static async getGauge(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<GaugeVo[]>(`${this.apiPrefix}/MES_TASK/Get_YCLY`, data, { signal })
  }

  static async getMaterialType(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<MaterialType[]>(`${this.apiPrefix}/MES_TASK/Get_CZTJ`, data, {
      signal
    })
  }

  static async getInternalReturnReason(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<InternalReturnReasonVo[]>(
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_NFYYTJ`,
      data,
      { signal }
    )
  }

  static async getCheck(params: CheckDto, signal?: AbortSignal) {
    return httpClient.get<CheckVo[]>(
      `${this.apiPrefix}/DEVICE_TOURVOUCH/Get_ZZ_TJ`,
      {},
      { signal, params }
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
    return httpClient.post<UnfinishedTaskVo[]>(`${this.apiPrefix}/MES_TASK/Get_WWGTJ`, data, {
      signal
    })
  }

  static async getHourCompletion(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<HourCompletionVo[]>(`${this.apiPrefix}/MES_TASK/Get_WGTJ`, data, {
      signal
    })
  }

  static async getDeviceRunningStatus(data: PageDto, signal?: AbortSignal) {
    return httpClient.post<Page<DeviceRunningStatusVo>>(
      `${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_SDZT`,
      data,
      {
        signal
      }
    )
  }
}
