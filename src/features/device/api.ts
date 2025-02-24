import type {
  CheckVo,
  CumulativeDownTimeVo,
  FaultClassifyVo,
  MaintainVo,
  MTTRVo,
  RepairInfoVo,
  RepairTimeVo,
  RepairVo
} from './types'

export class DeviceAPI {
  private static apiPrefix = KB_SERVICE_API_PREFIX

  static async getRepair(signal?: AbortSignal) {
    return httpClient.get<RepairVo>(`${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_WXTJ`, {}, { signal })
  }

  static async getMaintain(signal?: AbortSignal) {
    return httpClient.get<MaintainVo>(
      `${this.apiPrefix}/DEVICE_PRESERVEVOUCH/Get_BYTJ`,
      {},
      { signal }
    )
  }

  static async getCheck(signal?: AbortSignal) {
    return httpClient.get<CheckVo>(`${this.apiPrefix}/DEVICE_TOURVOUCH/Get_DJTJ`, {}, { signal })
  }

  static async getRepairInfo(signal?: AbortSignal) {
    return httpClient.post<Page<RepairInfoVo>>(
      `${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_SBWXF_ALLForPage`,
      {},
      { signal }
    )
  }

  static async getRepairTime(signal?: AbortSignal) {
    return httpClient.get<RepairTimeVo[]>(
      `${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_WXCSTJ`,
      {},
      { signal }
    )
  }

  static async getCumulativeDownTime(signal?: AbortSignal) {
    return httpClient.get<CumulativeDownTimeVo[]>(
      `${this.apiPrefix}/DEVICE_REPAIRVOUCH/Get_TJTJ`,
      {},
      { signal }
    )
  }

  static async getFaultClassify(signal?: AbortSignal) {
    return httpClient.get<FaultClassifyVo[]>(
      `${this.apiPrefix}/DEVICE_FALUTVOUCH/Get_GZFLTJ`,
      {},
      { signal }
    )
  }

  static async getMMTR(signal?: AbortSignal) {
    return httpClient.get<MTTRVo[]>(`${this.apiPrefix}/DEVICE_REPAIRVOUCH/Get_MTTR`, {}, { signal })
  }
}
