import type { InternalReturnReasonVo } from './types'

export class DoorSkinPanelProductionLineAPI {
  private static apiPrefix = KB_SERVICE_API_PREFIX

  static async getInternalReturnReason(data: FullPageDto, signal?: AbortSignal) {
    return httpClient.post<InternalReturnReasonVo[]>(
      `${this.apiPrefix}/MES_REPAIR_VOUCH/Get_GD_NFYYTJ`,
      data,
      { signal }
    )
  }
}
