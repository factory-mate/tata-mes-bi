import { DoorSkinPanelProductionLineAPI } from './api'
import { internalReturnReasonQK } from './query-keys'

export const internalReturnReasonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnReasonQK(data),
    queryFn: ({ signal }) => DoorSkinPanelProductionLineAPI.getInternalReturnReason(data, signal)
  })
