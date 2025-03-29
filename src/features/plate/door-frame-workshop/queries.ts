import { DoorFrameWorkshopAPI } from './api'
import {
  deviceRepairQK,
  hourWorkingQK,
  internalReturnQK,
  internalReturnReasonQK,
  linePersonQK,
  materialCallQK,
  packageNumQK,
  primaryYieldQK,
  productionReachQK
} from './query-keys'
import type { DeviceRepairDto } from './types'

export const linePersonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: linePersonQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getLinePerson(data, signal)
  })

export const productionReachQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: productionReachQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getProductionReach(data, signal)
  })

export const packageNumQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: packageNumQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getPackageNum(data, signal)
  })

export const primaryYieldQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: primaryYieldQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getPrimaryYield(data, signal)
  })

export const hourWorkingQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: hourWorkingQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getHourWorking(data, signal)
  })

export const internalReturnQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getInternalReturn(data, signal)
  })

export const internalReturnReasonQO = (data: FullPageDto) =>
  queryOptions({
    queryKey: internalReturnReasonQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getInternalReturnReason(data, signal)
  })

export const deviceRepairQO = (params: DeviceRepairDto) =>
  queryOptions({
    queryKey: deviceRepairQK(params),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getDeviceRepair(params, signal)
  })

export const materialCallQO = (data: PageDto) =>
  queryOptions({
    queryKey: materialCallQK(data),
    queryFn: ({ signal }) => DoorFrameWorkshopAPI.getMaterialCall(data, signal)
  })
