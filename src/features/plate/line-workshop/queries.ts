import { LineWorkshopAPI } from './api'
import {
  basicInfoQK,
  deviceRepairQK,
  hourWorkingQK,
  internalReturnQK,
  internalReturnReasonQK,
  materialCallQK,
  packageNumQK,
  productionReachedQK
} from './query-keys'
import type { DeviceRepairDto } from './types'

export const basicInfoQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: basicInfoQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getBasicInfo(data, signal)
  })

export const productionReachedQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: productionReachedQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getProductionReached(data, signal)
  })

export const packageNumQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: packageNumQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getPackageNum(data, signal)
  })

export const hourWorkingQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: hourWorkingQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getHourWorking(data, signal)
  })

export const internalReturnQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getInternalReturn(data, signal)
  })

export const internalReturnReasonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnReasonQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getInternalReturnReason(data, signal)
  })

export const deviceRepairQO = (params: DeviceRepairDto) =>
  queryOptions({
    queryKey: deviceRepairQK(params),
    queryFn: ({ signal }) => LineWorkshopAPI.getDeviceRepair(params, signal)
  })

export const materialCallQO = (data: PageDto) =>
  queryOptions({
    queryKey: materialCallQK(data),
    queryFn: ({ signal }) => LineWorkshopAPI.getMaterialCall(data, signal)
  })
