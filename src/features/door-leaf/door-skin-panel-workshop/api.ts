import type {
  BasicInfoVo,
  DeviceRepairDto,
  DeviceRepairVo,
  InternalReturnType,
  LateProductionVo,
  MaterialCallVo,
  ProductionReachedVo
} from './types'

export class DoorSkinPanelWorkshop {
  private static apiPrefix = KB_SERVICE_API_PREFIX

  static async getBasicInfo(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<BasicInfoVo>(`${this.apiPrefix}/LINE_EXTEND/Get_Person_CJTJ`, data, {
      signal
    })
  }

  static async getLateProduction(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<Page<LateProductionVo>>(
      `${this.apiPrefix}/MES_TASK/Get_MPCJ_CHTJ`,
      data,
      {
        signal
      }
    )
  }

  static async getProductionReached(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<ProductionReachedVo[]>(`${this.apiPrefix}/MES_TASK/Get_CXDCL`, data, {
      signal
    })
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

  static async getDeviceRepair(params: DeviceRepairDto, signal?: AbortSignal) {
    return httpClient.post<Page<DeviceRepairVo>>(
      `${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_SBWXForPage`,
      {},
      { signal, params }
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
