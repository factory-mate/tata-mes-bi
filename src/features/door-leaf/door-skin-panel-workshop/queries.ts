import { DoorSkinPanelWorkshop } from './api'
import {
  basicInfoQK,
  deviceRepairQK,
  internalReturnQK,
  lateProductionQK,
  materialCallQK,
  productionReachedQK
} from './query-keys'
import type { DeviceRepairDto } from './types'

export const basicInfoQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => DoorSkinPanelWorkshop.getBasicInfo(data, signal)
  })

export const lateProductionQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: lateProductionQK(data),
    queryFn: ({ signal }) => DoorSkinPanelWorkshop.getLateProduction(data, signal)
  })

export const productionReachedQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: productionReachedQK(data),
    queryFn: ({ signal }) => DoorSkinPanelWorkshop.getProductionReached(data, signal)
  })

export const internalReturnQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnQK(data),
    queryFn: ({ signal }) => DoorSkinPanelWorkshop.getInternalReturnType(data, signal)
  })

export const deviceRepairQO = (params: DeviceRepairDto) =>
  queryOptions({
    queryKey: deviceRepairQK(params),
    queryFn: ({ signal }) => DoorSkinPanelWorkshop.getDeviceRepair(params, signal)
  })

export const materialCallQO = (data: PageDto) =>
  queryOptions({
    queryKey: materialCallQK(data),
    queryFn: ({ signal }) => DoorSkinPanelWorkshop.getMaterialCall(data, signal)
  })
