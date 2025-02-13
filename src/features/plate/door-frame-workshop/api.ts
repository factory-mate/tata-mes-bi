import type { FullPageDto, Page, PageDto } from '@/shared/types'

import type {
  BasicInfoVo,
  DeviceRepairDto,
  DeviceRepairVo,
  HourWorkingVo,
  InternalReturnReasonVo,
  InternalReturnVo,
  MaterialCallVo,
  PackageNumVo,
  ProductionReachVo
} from './types'

export class DoorFrameWorkshopAPI {
  private static apiPrefix = KB_SERVICE_API_PREFIX

  static async getBasicInfo(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<BasicInfoVo>(`${this.apiPrefix}/LINE_EXTEND/Get_Person_CJTJ`, data, {
      signal
    })
  }

  static async getProductionReach(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<ProductionReachVo[]>(`${this.apiPrefix}/MES_TASK/Get_GXTJ`, data, {
      signal
    })
  }

  static async getPackageNum(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<PackageNumVo[]>(`${this.apiPrefix}/MES_TASK/Get_Task_TJ`, data, {
      signal
    })
  }

  static async getHourWorking(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<HourWorkingVo[]>(`${this.apiPrefix}/MES_TASK/Get_Task_GD_SDWWTJ`, data, {
      signal
    })
  }

  static async getInternalReturn(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<InternalReturnVo[]>(
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_GD_NFZB`,
      data,
      {
        signal
      }
    )
  }

  static async getInternalReturnReason(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<InternalReturnReasonVo[]>(
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_GD_NFYYTJ`,
      data,
      {
        signal
      }
    )
  }

  static async getDeviceRepair(data: DeviceRepairDto, signal?: AbortSignal) {
    return httpClient.post<Page<DeviceRepairVo>>(
      `${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_SBWXForPage`,
      data,
      { signal }
    )
  }

  static async getMaterialCall(data: PageDto, signal?: AbortSignal) {
    return httpClient.post<Page<MaterialCallVo>>(
      `${this.apiPrefix}/WMS_MATERIAL_APPLYFOR/GetForPage`,
      data,
      { signal }
    )
  }
}
